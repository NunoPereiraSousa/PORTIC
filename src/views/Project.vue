<template>
  <div>
    <div class="project">
      <section class="project__entry">
        <div class="project__entry__grid grid">
          <h1>
            <a>Projeto</a>
            <div>{{ project.initials }}</div>
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
              <a :href="`tel:+351${project.project_contact}`">{{
                project.project_contact
              }}</a>
            </h2>
            <h2>
              <a :href="`mailto:${project.project_email}`">{{
                project.project_email
              }}</a>
            </h2>
          </div>
        </div>
        <div class="project__entry__carousel">
          <div class="slide-track">
            <div class="flex" v-for="i in 2" :key="i">
              <Slide
                v-for="partner in setPartners"
                :key="partner.id_investor"
                :slideText="partner.designation"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="project__objective">
        <SubHeaderTitle text="Descrição" />
        <div v-html="project.desc_html_structure"></div>
      </section>
      <section class="project__gallery">
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
              v-for="(image, index) in project.gallery_imgs"
              :key="index"
            >
              <img :src="image" alt="Project Image" />
            </vue-glide-slide>
          </vue-glide>
        </div>
        <div v-else style="color: #fff">
          Não existem imagens associadas ao projeto
        </div>
      </section>
      <section class="project__news">
        <SubHeaderTitle text="Últimas notícias" class="light" />

        <div class="project__news__grid grid" v-if="checkNewsExistence">
          <NewsCard
            v-for="(news, index) in project.news"
            :key="index"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            date="05 de março"
          />
          <SlidePanel
            :title="newsSelectedTitle"
            :content="newsSelectedContent"
            :author="author"
          />
        </div>
        <div v-else style="color: #080808">
          Não existem notícias associadas ao projeto
        </div>
      </section>
      <section class="project__team">
        <SubHeaderTitle text="Equipa de projeto" />

        <div class="project__team__grid grid">
          <TeamCard
            v-for="member in project.project_team"
            :key="member.id_user"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            :name="member.full_name"
            :number="member.phone_number"
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
import SlidePanel from "@/components/SlidePanel.vue";
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
    SlidePanel,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      selectedProject: null,
      selectedId: null,
      project: {
        id: null,
        initials: null,
        title: null,
        phoneNumber: null,
        email: null,
        description: null,
        news: [],
        gallery: [],
        team: []
      },
      newsSelectedTitle: null,
      newsSelectedContent: null,
      author: null
    };
  },
  computed: {
    ...mapGetters([
      "getProjectByName",
      "getProjectByID",
      "getSelectedProjectByID",
      "getProjectsStatus",
      "getNews",
      "getNewsById",
      "getSelectedNewsId"
    ]),
    galleryStatus() {
      let status = this.getProjectsStatus;

      return status == 200 ? true : false;
    },
    checkImgExistence() {
      let project = this.getProjectByID(this.getSelectedProjectByID);
      let images = project.gallery_imgs;

      return images > 0 ? true : false;
    },
    checkNewsExistence() {
      let project = this.getProjectByID(this.getSelectedProjectByID);
      let news = project.news;

      return news > 0 ? true : false;
    },
    setPartners() {
      let internal = this.project.inside_investors;
      let externals = this.project.outside_investors;

      return [...internal, ...externals];
    }
    // getCurrentProject() {
    //   let id = this.getSelectedProjectByID;

    //   let project = this.getProjectByID(id);

    //   return project;
    // }
  },
  created() {
    this.selectedId = this.getSelectedProjectByID;

    this.project = this.getProjectByID(this.selectedId);
  },
  mounted() {
    console.log(this.$store.getters.getSelectedProjectByID);

    this.changeCarousel();
  },
  methods: {
    formatCurrency(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€`;
    },
    changeCarousel() {
      let nInternals = this.project.inside_investors.length;
      let nPartners = this.project.outside_investors.length;

      console.log(nInternals);

      let slideTrack = document.querySelector(".slide-track");
      let slide = document.querySelectorAll(".slide");

      if (window.innerWidth >= 1024 && window.innerWidth < 1500) {
        slideTrack.style.width = `calc(250px * ${nPartners * 2 +
          nInternals * 2})`;

        slideTrack.style.animation = `carouselDesktop${nPartners +
          nInternals} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "250px";
        });
      } else if (window.innerWidth >= 1500) {
        slideTrack.style.width = `calc(350px * ${nPartners * 2 +
          nInternals * 2})`;

        slideTrack.style.animation = `carouselDesktopBig${nPartners +
          nInternals} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "350px";
        });
      } else {
        slideTrack.style.width = `calc(125px * ${nPartners * 2 +
          nInternals * 2})`;

        slideTrack.style.animation = `carousel${nPartners +
          nInternals} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "125px";
        });
      }
    },
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
    }
  }
};
</script>
