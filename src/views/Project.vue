<template>
  <div>
    <div class="project">
      <section class="project__entry">
        <div class="project__entry__grid grid">
          <h1>
            <a>Projeto</a>
            <div>{{ getCurrentProjects.initials }}</div>
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
              <a :href="`tel:+351${getCurrentProjects.project_contact}`">{{
                getCurrentProjects.project_contact
              }}</a>
            </h2>
            <h2>
              <a :href="`mailto:${getCurrentProjects.project_email}`">{{
                getCurrentProjects.project_email
              }}</a>
            </h2>
          </div>
        </div>
        <div class="project__entry__carousel">
          <div class="slide-track">
            <div class="flex" v-for="i in 2" :key="i">
              <Slide
                v-for="(partner, index) in setPartnersArr(
                  getCurrentProjects.outside_investors,
                  getCurrentProjects.outside_investors
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
        <div v-html="getCurrentProjects.desc_html_structure"></div>
      </section>
      <section class="project__gallery" v-if="checkImgExistence">
        <SubHeaderTitle text="Galeria de projeto" class="light" />
        <div class="project__gallery__grid" v-if="checkImgExistence">
          <vue-glide
            v-if="galleryStatus"
            :bullet="true"
            :startAt="1"
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
            :infinite="false"
          >
            <vue-glide-slide
              v-for="(image, index) in getCurrentProjects.gallery_imgs"
              :key="index"
            >
              <img :src="image" alt="Project Image" />
            </vue-glide-slide>
          </vue-glide>
        </div>
        <!-- <div v-else style="color: #fff">
          Não existem imagens associadas ao projeto
        </div> -->
      </section>
      <section class="project__news" v-if="checkNewsExistence">
        <SubHeaderTitle text="Últimas notícias" class="light" />

        <div class="project__news__grid grid">
          <NewsCard
            v-for="(news, index) in getCurrentProjects.news"
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
            v-for="member in getCurrentProjects.project_team"
            :key="member.id_user"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            :name="member.full_name"
            :number="member.email"
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
import { Glide, GlideSlide } from "vue-glide-js";
import { mapGetters } from "vuex";

export default {
  name: "Project",
  components: {
    SubHeaderTitle,
    Slide,
    NewsCard,
    TeamCard,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      projects: [],
      selectedProject: null,
      selectedId: null,
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
        team: []
      },
      newsSelectedTitle: null,
      newsSelectedContent: null,
      author: null
    };
  },
  created() {
    this.selectedId = this.getSelectedProjectByID;

    this.projects = JSON.parse(localStorage.getItem("projects"));

    this.project.initials = this.getCurrentProject.initials;
    this.project.phoneNumber = this.getCurrentProject.project_contact;
    this.project.email = this.getCurrentProject.project_email;
    this.project.partners = this.setPartnersArr(
      this.getCurrentProject.inside_investors,
      this.getCurrentProject.outside_investors
    );
    this.project.description = this.getCurrentProject.desc_html_structure;
    this.project.gallery = this.getCurrentProject.gallery_imgs;
    this.project.news = this.getCurrentProject.news;
    this.project.team = this.getCurrentProject.project_team;
  },
  mounted() {
    this.changeCarousel();

    console.log(this.getCurrentProject);
  },
  computed: {
    ...mapGetters([
      "getProjects",
      "getSelectedProjectByID",
      "getProjectsStatus"
    ]),
    getCurrentProjects() {
      let selectedProjects = this.getProjects;

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
      let images = this.project.gallery;

      return images > 0 ? true : false;
    },
    checkNewsExistence() {
      let news = this.getCurrentProjects.news.length;

      return news > 0 ? true : false;
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
        this.getCurrentProjects.outside_investors,
        this.getCurrentProjects.outside_investors
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
    }
  }
};
</script>
