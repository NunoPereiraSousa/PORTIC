<template>
  <div class="home">
    <div class="scene"></div>
    <!-- <div class="overlay"></div> -->
    <section class="landing">
      <h1>
        <span>Welcome to</span>
        <div>PORTIC</div>
      </h1>
      <hr />
      <h4>
        <div class="hide-for-desktop">
          Porto Research,
        </div>
        <div class="hide-for-desktop">
          Technology
        </div>
        <div class="hide-for-desktop">
          & Innovation Center.
        </div>
        <div class="hide-for-mobile">
          Porto Research, Technology
        </div>
        <div class="hide-for-mobile">
          & Innovation Center.
        </div>
      </h4>
      <button class="hide-for-desktop">Know more about us</button>
      <div class="landing__down flex flex-jc-c flex-ai-c hide-for-mobile">
        <div class="landing__down__arrow">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <p>An open door towards the future</p>
      </div>
      <div class="landing__carousel hide-for-desktop">
        <div class="carousel">
          <div class="slide-track">
            <div class="slide">
              <p>An open door towards the future</p>
            </div>
            <div class="slide">
              <p>An open door towards the future</p>
            </div>
            <div class="slide">
              <p>An open door towards the future</p>
            </div>
            <div class="slide">
              <p>An open door towards the future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <h1 class="about__title hide-for-desktop">
        <div class="line">
          <div><span>Lorem</span> ipsum dolor sit</div>
        </div>
        <div class="line">
          <div>
            amet consectetur
          </div>
        </div>
        <div class="line">
          <div>
            cumque libero quam.
          </div>
        </div>
        <div class="line">
          <div>
            error dolores quam
          </div>
        </div>
        <div class="line">
          <div>
            cumque libero daww.
          </div>
        </div>
        <div class="line">
          <div>
            ccumque libero quam.
          </div>
        </div>
      </h1>
      <h1
        class="about__title hide-for-mobile flex flex-ai-c flex-jc-c flex-fd-c"
      >
        <div class="line">
          <div><span>Lorem</span> ipsum dolor sit amet</div>
        </div>
        <div class="line">
          <div>
            consectetur cumque libero aliquam.
          </div>
        </div>
        <div class="line">
          <div>
            error dolores quam dolor
          </div>
        </div>
        <div class="line">
          <div>
            cumque libero aliquam.
          </div>
        </div>
      </h1>
    </section>
    <section class="news">
      <h1 class="news__title">
        Discover our news and releases
      </h1>
      <div class="news__cards grid">
        <NewsCard
          image="../../assets/news1.png"
          title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          date="05 de março"
        />
        <NewsCard
          image="../../assets/news2.png"
          title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          date="05 de março"
        />
        <NewsCard
          image="../../assets/news3.png"
          title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          date="05 de março"
        />
        <div class="flex flex-ai-c flex-jc-c">
          <button>
            All news
          </button>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <h1 class="testimonials__title">
        Clients who placed their trust in us
      </h1>
      <div class="testimonials__cards">
        <vue-glide
          :gap="40"
          :breakpoints="{
            450: {
              perView: 1
            },
            768: {
              perView: 2
            },
            1200: {
              perView: 3
            }
          }"
          :rewind="false"
          :bound="true"
          :focusAt="'center'"
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
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCard from "@/components/NewsCard.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "Home",
  components: {
    NewsCard,
    TestimonialCard,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  mounted() {
    const SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight,
      r = 450;

    let camera, scene, renderer, controls;
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
        [0.5, 0x808080, 1],
        [0.75, 0xc94d24, 0.75],
        [1, 0x808080, 0.5],
        [1.25, 0xc94d24, 0.8],
        [3.0, 0xaaaaaa, 0.75],
        [3.5, 0xe3e3e3, 0.5],
        [4.5, 0xe3e3e3, 0.25],
        [5.5, 0xe3e3e3, 0.125]
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

      renderer.setClearColor(0xffffff, 1);
      renderer.setClearColor(0x081426, 1);

      threeJsScene.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 500;
      controls.maxDistance = 800;
      controls.enableRotate = true;
      controls.addEventListener("change", render);

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

      for (let i = 0; i < 1500; i++) {
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

      scene.rotation.x += 0.0001;
      scene.rotation.y += 0.0001;
      scene.rotation.z += 0.0001;

      controls.update();

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
              (i / 5 + 1) *
              (1 + 0.5 * Math.sin(2 * time));

            object.scale.x = object.scale.y = object.scale.z = scale;
          }
        }
      }
    }
  }
};
</script>
