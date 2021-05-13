<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="headers">
      <div v-if="this.$route.name === 'Home'">
        <SubHeader />
        <Header theme="transparent" />
      </div>
      <!-- <div v-if="this.$route.name === 'DashboardHome'">
        <DashboardHeader />
      </div> -->
      <div
        v-if="
          this.$route.name !== 'Home' &&
            this.$route.name !== 'DashboardHome' &&
            this.$route.name !== 'DashboardAreas' &&
            this.$route.name !== 'DashboardAddAreas' &&
            this.$route.name !== 'DashboardEditAreas' &&
            this.$route.name !== 'DashboardCourses' &&
            this.$route.name !== 'DashboardAddCourses' &&
            this.$route.name !== 'DashboardEditCourses' &&
            this.$route.name !== 'DashboardProjects' &&
            this.$route.name !== 'DashboardAddProjects' &&
            this.$route.name !== 'DashboardEditProjects' &&
            this.$route.name !== 'DashboardUnities' &&
            this.$route.name !== 'DashboardAddUnities' &&
            this.$route.name !== 'DashboardEditUnities' &&
            this.$route.name !== 'DashboardCareers' &&
            this.$route.name !== 'DashboardEditCareers'
        "
      >
        <SubHeader />
        <Header theme="normal" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import Header from "@/components/Header.vue";
// import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mapGetters } from "vuex";

export default {
  components: {
    SubHeader,
    Header
    // DashboardHeader
  },
  data: () => {
    return {
      previous__scroll__pos: null,
      currLang: ""
    };
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", this.handleScroll);

    this.previous__scroll__pos = window.pageYOffset;

    this.currLang = this.getCurrLang;
    this.getLang();
  },
  computed: {
    ...mapGetters(["getCurrLang"])
  },
  methods: {
    handleScroll() {
      let navbar = document.querySelector(".navbar");
      let phone_navbar = document.querySelector(".phone_navbar");

      ScrollTrigger.create({
        trigger: ".landing",
        endTrigger: ".footer",
        start: "bottom top-=-400",
        end: "bottom top-=-400",
        toggleClass: {
          targets: navbar,
          className: "scroll"
        }
      });

      ScrollTrigger.create({
        trigger: ".landing",
        endTrigger: ".footer",
        start: "bottom top-=-80",
        end: "bottom top-=-80",
        toggleClass: {
          targets: phone_navbar,
          className: "scroll"
        }
      });
    },
    getLang() {
      this.$i18n.locale = this.currLang;

      this.$store.commit("SET_LOCALE", this.$i18n.locale);
    }
  }
};
</script>

<style lang="scss">
@import "../css/style.css";
</style>
