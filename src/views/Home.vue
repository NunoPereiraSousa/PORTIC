<template>
  <div class="home">
    <div class="scene"></div>
    <Intro keyword="PORTIC" />
    <Quote />
    <section class="news">
      <h1 class="news__title">
        {{ $t("homepage.news.title") }}
      </h1>
      <div class="news__cards grid">
        <NewsCard
          v-for="news in setNews"
          :key="news.id_news"
          :image="news.cover"
          :title="news.title"
          :content="news.description"
          :date="news.published_date"
          :id="news.id_news"
          @click.native="getNewsId"
        />
      </div>
      <SlidePanel
        :title="newsSelectedTitle"
        :content="newsSelectedContent"
        :author="author"
      />
      <!-- <KnowMoreBtn
        type="know__more dark"
        text="All news"
        route="ProjectsCatalog"
      /> -->
    </section>
    <section class="testimonials">
      <!-- <h1 class="testimonials__title">
        {{ $t("homepage.testimonials.title") }}
      </h1>

      <h1 class="alert">
        {{ $t("homepage.testimonials.desc") }}
        <span>coming soon!</span>
      </h1> -->
      <!-- <div class="testimonials__cards">
        <vue-glide
          :startAt="1"
          :gap="40"
          :breakpoints="{
            450: {
              perView: 1
            },
            768: {
              perView: 2
            },
            1024: {
              perView: 2
            },
            1300: {
              perView: 3
            }
          }"
          :rewind="false"
          :bound="true"
          :infinite="false"
        >
          <vue-glide-slide v-for="i in 10" :key="i">
            <TestimonialCard
              name="Alex Poporov"
              company="Apple inc"
              content="Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt. Lorem ipsum dolor sit amet, 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt. Lorem ipsum dolor sit amet, 
                    adipiscing elit, sed do eiusmod tempor."
          /></vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400.004 400.004"
                class="left__arrow"
              >
                <path
                  d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0012.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z"
                ></path>
              </svg>
            </button>
            <button data-glide-dir=">">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.832 268.832"
                class="right__arrow"
              >
                <path
                  d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"
                ></path>
              </svg>
            </button>
          </template>
        </vue-glide>
      </div> -->
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Intro from "@/components/Intro.vue";
import Quote from "@/components/Quote.vue";
import NewsCard from "@/components/NewsCard.vue";
import SlidePanel from "@/components/SlidePanel.vue";
// import KnowMoreBtn from "@/components/KnowMoreBtn.vue";
// import TestimonialCard from "@/components/TestimonialCard.vue";
import Footer from "@/components/Footer.vue";
import { Glide, GlideSlide } from "vue-glide-js";
// import { background } from "../../js/background";
import * as THREE from "three";

export default {
  name: "Home",
  components: {
    Intro,
    Quote,
    // KnowMoreBtn,
    NewsCard,
    SlidePanel,
    // TestimonialCard,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      newsArr: null,
      newsSelectedTitle: null,
      newsSelectedContent: null,
      author: null
    };
  },
  async created() {
    this.$store.commit("SET_SELECTED_NEWS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setNews");

      console.log(this.getNews);
    } catch (error) {
      console.log(error);
      return error;
    }

    this.newsArr = this.getNews;
    this.newsContent = this.getNewsById;
  },
  mounted() {
    const SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight,
      r = 450;

    let camera, scene, renderer;
    let threeJsScene = document.querySelector(".scene");

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(
        70,
        SCREEN_WIDTH / SCREEN_HEIGHT,
        1,
        3000
      );
      camera.position.z = 1000;

      // areas of actuation FOV goes to 500

      scene = new THREE.Scene();

      const parameters = [
        [0.25, 0xc94d24, 1],
        [0.5, 0x555555, 1],
        [0.75, 0x555555, 0.75],
        [1, 0x444444, 0.5],
        [1.25, 0xc94d24, 0.8],
        [3.0, 0x444444, 0.75]
      ];

      const geometry = createGeometry();

      for (let i = 0; i < parameters.length; ++i) {
        const p = parameters[i];

        const material = new THREE.LineBasicMaterial({
          color: p[1],
          opacity: p[2]
        });

        const line = new THREE.LineSegments(geometry, material);
        line.scale.x = line.scale.y = line.scale.z = p[0];
        line.userData.originalScale = p[0];
        line.rotation.y = Math.random() * Math.PI;
        line.updateMatrix();
        scene.add(line);
      }

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(threeJsScene.clientWidth, threeJsScene.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // renderer.setClearColor(0xffffff, 1);
      renderer.setClearColor(0x081426, 1);

      threeJsScene.appendChild(renderer.domElement);

      // if (window.innerWidth >= 1500) {
      //   controls.minDistance = 400;
      //   controls.maxDistance = 900;
      // } else {
      //   controls.minDistance = 500;
      //   controls.maxDistance = 800;
      // }

      // controls.minDistance = 500;
      // controls.maxDistance = 800;
      // controls.enableRotate = true;
      // controls.addEventListener("change", render);

      document.body.style.touchAction = "none";
      document.body.addEventListener("pointermove", onPointerMove);

      //

      window.addEventListener("resize", onWindowResize);

      // test geometry swapability

      //   setInterval(function() {
      //     const geometry = createGeometry();

      //     scene.traverse(function(object) {
      //       if (object.isLine) {
      //         object.geometry.dispose();
      //         object.geometry = geometry;
      //       }
      //     });
      //   }, 1000);
    }

    function createGeometry() {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      const vertex = new THREE.Vector3();

      for (let i = 0; i < 900; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(r);

        vertices.push(vertex.x, vertex.y, vertex.z);

        vertex.multiplyScalar(Math.random() * 0.03 + 1);

        vertices.push(vertex.x, vertex.y, vertex.z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      return geometry;
    }

    function onWindowResize() {
      camera.aspect = threeJsScene.clientWidth / threeJsScene.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(threeJsScene.clientWidth, threeJsScene.clientHeight);
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return;

      //   mouseY = event.clientY - windowHalfY;
    }

    //

    function animate() {
      requestAnimationFrame(animate);

      scene.rotation.x += 0.0002;
      scene.rotation.y += 0.0002;
      scene.rotation.z += 0.0002;

      // controls.update();

      render();
    }

    function render() {
      //   camera.lookAt(scene.position);

      renderer.render(scene, camera);

      const time = Date.now() * 0.00002;

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];

        if (object.isLine) {
          //   object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

          if (i < 5) {
            const scale =
              object.userData.originalScale *
              (i / 3 + 1) *
              (1 + 0.5 * Math.sin(2 * time));

            object.scale.x = object.scale.y = object.scale.z = scale;
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getNews", "getNewsById", "getSelectedNewsId"]),
    setNews() {
      return this.getNews;
    }
  },
  methods: {
    getNewsId() {
      let newsId = this.getSelectedNewsId;

      if (newsId != null) {
        this.getSelectedNews(newsId);
      }
    },
    getSelectedNews(id) {
      let news = this.getNewsById(id);

      this.newsSelectedTitle = news.title;
      this.newsSelectedContent = news.content;
      this.author = news.author;
    },
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    }
  }
};
</script>
