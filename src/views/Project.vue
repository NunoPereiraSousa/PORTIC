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
                DEMONSTRATION
              </div>
            </h4>
          </div>

          <div class="project__entry__grid__contacts">
            <h3>
              <div>Para requerimentos ou mais informação, por favor,</div>
              <div>contacte-nos via e-mail ou contacto telefónico.</div>
            </h3>

            <h2>
              <a href="tel:+351919554127">(+351) 919 554 127</a>
            </h2>
            <h2>
              <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
            </h2>
          </div>
        </div>
        <div class="project__entry__carousel">
          <div class="slide-track">
            <div v-for="i in 2" :key="i" class="flex">
              <Slide
                v-for="(partner, index) in projects.partners"
                :key="index"
                :slideText="partner"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="project__objective">
        <SubHeaderTitle text="Descrição" />
        <p v-html="project.description"></p>
        <p><b>Orçamento total: </b>{{ project.overallBudget }}</p>
        <p><b>Orçamento PORTIC: </b>{{ project.porticBudget }}</p>
      </section>
      <section class="project__gallery">
        <SubHeaderTitle text="The gallery" class="light" />
        <div class="project__gallery__grid">
          <vue-glide
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
            <vue-glide-slide v-for="i in 10" :key="i">
              <img
                src="https://www.kmuw.org/sites/kmuw/files/styles/x_large/public/201609/heart_in_the_middle.jpg"
                alt="Project Image"
              />
            </vue-glide-slide>
          </vue-glide>
        </div>
      </section>
      <section class="project__news">
        <SubHeaderTitle text="Latest News" class="light" />

        <div class="project__news__grid grid">
          <NewsCard
            v-for="i in 3"
            :key="i"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            date="05 de março"
          />
        </div>
      </section>
      <section class="project__team">
        <SubHeaderTitle text="Project Team" />

        <div class="project__team__grid grid">
          <TeamCard
            v-for="i in 5"
            :key="i"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            name="Anna Mendiev"
            position="Art Director"
          />
        </div>
      </section>
      <section class="project__contacts">
        <SubHeaderTitle text="Contacts" />

        <p>
          Para requerimentos ou mais informação, por favor, contacte-nos via
          e-mail ou contacto telefónico.
        </p>

        <h3>
          <a href="tel:+351919554127">(+351) 919 554 127</a>
        </h3>
        <h3>
          <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
        </h3>
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
      projects: null,
      projectName: null,
      initials: null,
      duplicatePartnersLength: null,
      project: {
        id: null,
        initials: null,
        title: null,
        overallBudget: null,
        porticBudget: null,
        description: null
      }
    };
  },
  computed: {
    ...mapGetters(["getSelectedProject", "getProjectByName"])
  },
  created() {
    if (JSON.parse(localStorage.getItem("project_name"))) {
      this.$store.commit("SET_SELECTED_PROJECT", {
        initials: JSON.parse(localStorage.getItem("project_name"))
      });

      this.projectName = this.getSelectedProject;

      this.projects = this.getProjectByName(this.projectName);

      this.duplicatePartnersLength = this.projects.partners.length * 2;

      this.fetchData();
    }
  },
  mounted() {
    this.changeCarousel();
  },
  methods: {
    fetchData() {
      this.project.id = this.projects.id;
      this.project.initials = this.projects.initials;
      this.project.title = this.projects.title;
      this.project.overallBudget = this.formatCurrency(
        this.projects.overallBudget
      );
      this.project.porticBudget = this.formatCurrency(
        this.projects.porticBudget
      );
      this.project.description = this.projects.description;
    },
    formatCurrency(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€`;
    },
    changeCarousel() {
      let nPartners = this.projects.partners.length;

      let slideTrack = document.querySelector(".slide-track");
      let slide = document.querySelectorAll(".slide");

      if (window.innerWidth >= 1024 && window.innerWidth < 1500) {
        slideTrack.style.width = `calc(250px * ${nPartners * 2})`;

        slideTrack.style.animation = `carouselDesktop${nPartners} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "250px";
        });
      } else if (window.innerWidth >= 1500) {
        slideTrack.style.width = `calc(350px * ${nPartners * 2})`;

        slideTrack.style.animation = `carouselDesktopBig${nPartners} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "350px";
        });
      } else {
        slideTrack.style.width = `calc(125px * ${nPartners * 2})`;

        slideTrack.style.animation = `carousel${nPartners} 20s linear infinite`;

        slide.forEach(s => {
          s.style.width = "125px";
        });
      }
    }
  }
};
</script>
