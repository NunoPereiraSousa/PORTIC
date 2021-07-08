<template>
  <div>
    <div class="project">
      <section class="project__entry">
        <div class="project__entry__grid grid">
          <h1>
            <a>Projeto</a>
            <div>{{ selected.initials }}</div>
          </h1>

          <div class="project__entry__grid__circle flex flex-ai-c flex-jc-c">
            <h4>
              <div>
                RESEARCH
              </div>
              <div>
                DEVELOPMENT
              </div>
              <div>
                INNOVATION
              </div>
            </h4>
          </div>

          <div class="project__entry__grid__contacts">
            <h3>
              {{ $t("project.contact") }}
            </h3>

            <h2>
              <a :href="`tel:+351${selected.project_contact}`">{{
                selected.project_contact
              }}</a>
            </h2>
            <h2>
              <a :href="`mailto:${selected.project_email}`">{{
                selected.project_email
              }}</a>
            </h2>
          </div>
        </div>
        <div class="project__entry__carousel">
          <div class="slide-track">
            <div class="flex" v-for="i in 2" :key="i">
              <Slide
                v-for="(partner, index) in setPartnersArr(
                  selected.outside_investors,
                  selected.outside_investors
                )"
                :key="index + 1"
                :slideText="partner.designation"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="project__objective">
        <SubHeaderTitle text="Descrição" />
        <div v-html="selected.desc_html_structure"></div>
        <div class="connections__info">
          <div v-if="getAreas.length > 0">
            <u>{{ $t("areas.mainTitle") }}:</u>
            <ul>
              <li v-for="area in getAreas" :key="area.id_area">
                <router-link :to="{ name: 'Contacts' }">
                  {{ area.designation }}
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="getCareers.length > 0">
            <u>{{ $t("careers.careersKey") }}:</u>
            <ul>
              <li
                v-for="career in getCareers"
                :key="career.id_available_position"
              >
                <router-link :to="{ name: 'Positions' }">
                  {{ career.desigantion }}
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="getCourses.length > 0">
            <u>{{ $t("courses.courseKey") }}:</u>
            <ul>
              <li v-for="course in getCourses" :key="course.id_course">
                <router-link :to="{ name: 'Courses' }">
                  {{ course.designation }}
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="getUnits.length > 0">
            <u>{{ $t("unities.unitiesKey") }}:</u>
            <ul>
              <li
                v-for="unit in getUnits"
                :key="unit.id_unity"
                @click="getUnityId(unit.id_unity, unit.designation)"
              >
                {{ unit.designation }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="project__gallery" v-if="checkImgExistence">
        <SubHeaderTitle text="Galeria de projeto" class="light" />
        <div class="project__gallery__grid" v-if="checkImgExistence">
          <vueper-slides
            :visible-slides="3"
            autoplay
            :pause-on-hover="pauseOnHover"
            @autoplay-pause="internalAutoPlaying = false"
            @autoplay-resume="internalAutoPlaying = true"
            :gap="3"
            :slide-ratio="1 / 4"
            :dragging-distance="200"
            :breakpoints="{
              2500: {
                autoplay: false
              },
              800: { visibleSlides: 2, slideMultiple: 2 },
              500: { visibleSlides: 1, slideMultiple: 1 }
            }"
            :bullets="true"
          >
            <vueper-slide
              v-for="(image, index) in images"
              :key="index"
              :image="image.img"
              alt="Project Image"
            />
          </vueper-slides>
        </div>
      </section>
      <section class="project__news" v-if="checkNewsExistence">
        <SubHeaderTitle text="Últimas notícias" class="light" />

        <div class="project__news__grid grid">
          <NewsCard
            v-for="(news, index) in selected.news"
            :key="index"
            :id="news.id_news"
            :image="news.cover"
            :title="news.title"
            :content="news.description"
            :date="news.published_date"
          />
        </div>
      </section>
      <section class="project__team">
        <SubHeaderTitle text="Equipa de projeto" />

        <div class="project__team__grid grid">
          <TeamCard
            v-for="member in selected.project_team"
            :key="member.id_user"
            :id="member.id_user"
            :image="
              member.picture == null
                ? 'https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png'
                : member.picture
            "
            :name="member.full_name"
            :number="member.post"
          />
        </div>
      </section>
      <section class="project__file">
        <div class="flex flex-wr-w flex-jc-sb flex-ai-c">
          <a :href="selected.pdf_path" target="_blank">Ficha de projeto</a>

          <img
            src="https://www.portoglobalhub.ipp.pt/financing-logos.png"
            alt=""
          />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import Slide from "@/components/Project/Slide.vue";
import NewsCard from "@/components/NewsCard.vue";
import TeamCard from "@/components/Project/TeamCard.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Project",
  components: {
    SubHeaderTitle,
    Slide,
    NewsCard,
    TeamCard,
    Footer,
    VueperSlides,
    VueperSlide
  },
  data: () => {
    return {
      projects: [],
      selectedProject: null,
      selectedId: null,
      selected: {},
      project: {
        id: null,
        initials: null,
        title: null,
        phoneNumber: null,
        email: null,
        description: null,
        partners: [],
        news: [],
        gallery: [],
        team: [],
        pdf_path: ""
      },
      newsSelectedTitle: null,
      newsSelectedContent: null,
      author: null,
      images: [],
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true
    };
  },
  created() {
    // this.selectedId = this.getSelectedProjectByID;

    // this.projects = JSON.parse(localStorage.getItem("projects"));

    this.selected = this.getProjectByID(this.getSelectedProjectByID);

    console.log(this.selected);

    this.project.initials = this.selected.initials;
    this.project.phoneNumber = this.selected.project_contact;
    this.project.email = this.selected.project_email;
    // this.project.partners = this.setPartnersArr(
    //   this.selected.inside_investors,
    //   this.selected.outside_investors
    // );
    this.project.description = this.selected.desc_html_structure;
    this.project.gallery = this.selected.gallery_imgs;
    this.project.news = this.selected.news;
    this.project.team = this.selected.project_team;
    this.project.pdf_path = this.selected.pdf_path;

    this.images = this.selected.gallery_imgs;

    console.log(this.images);

    localStorage.setItem("currNews", JSON.stringify(this.project.news));
  },
  mounted() {
    this.changeCarousel();
    // console.log(this.getCurrentProject);
    // console.log(this.getCurrentProject.pdf_path);
  },
  computed: {
    ...mapGetters([
      "getProjects",
      "getSelectedProjectByID",
      "getProjectByID",
      "getProjectsStatus"
    ]),
    getCurrentProjects() {
      let selectedProjects = this.getProjects;

      console.log("HERE!");

      // console.log(this.getSelectedProjectByID);

      return selectedProjects.find(
        n => n.id_project === this.getSelectedProjectByID
      );
    },
    getCurrentProject() {
      return this.projects.find(
        project => project.initials === this.$route.params.id
      );
    },
    currentId() {
      let projects = this.getProjects;

      return projects.find(
        project => project.initials === this.$route.params.id
      );
    },
    galleryStatus() {
      let status = this.getProjectsStatus;

      return status == 200 ? true : false;
    },
    checkImgExistence() {
      let images = this.selected.gallery_imgs.length;
      console.log(images);

      return images > 0 ? true : false;
    },
    checkNewsExistence() {
      let news = this.selected.news.length;

      return news > 0 ? true : false;
    },
    getAreas() {
      return this.selected.area_tags;
    },
    getCareers() {
      return this.selected.recruitment_tags;
    },
    getCourses() {
      return this.selected.course_tags;
    },
    getUnits() {
      return this.selected.unity_tags;
    }
  },
  methods: {
    setPartnersArr(internals, externals) {
      return [...internals, ...externals];
    },
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    },
    formatCurrency(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€`;
    },
    changeCarousel() {
      let partners = this.setPartnersArr(
        this.selected.outside_investors,
        this.selected.outside_investors
      ).length;

      let slideTrack = document.querySelector(".slide-track");
      let slide = document.querySelectorAll(".slide");

      if (window.innerWidth >= 1024 && window.innerWidth < 1500) {
        slideTrack.style.width = `calc(250px * ${partners * 2})`;

        slideTrack.style.animation = `carouselDesktop${partners} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "250px";
        });
      } else if (window.innerWidth >= 1500) {
        slideTrack.style.width = `calc(350px * ${partners * 2})`;

        slideTrack.style.animation = `carouselDesktopBig${partners} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "350px";
        });
      } else {
        slideTrack.style.width = `calc(125px * ${partners * 2})`;

        slideTrack.style.animation = `carousel${partners} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "125px";
        });
      }
    },
    formatRouterPath(title) {
      return title.replace(/\s/g, "%20");
    },
    getUnityId(id, title) {
      this.$store.commit("SET_SELECTED_UNITY_ID", { id: id });

      let formatedTitle = this.formatRouterPath(title);

      if (this.$route.path != `/unities/${formatedTitle}`) {
        this.$router.push({
          name: "UnitiesPage",
          params: { name: title }
        });
      }
    }
  }
};
</script>
