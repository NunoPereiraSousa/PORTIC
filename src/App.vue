<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="headers">
      <div v-if="this.$route.name === 'Home'">
        <SubHeader :loading="loadingStatus" />
        <Header theme="transparent" :loading="loadingStatus" />
      </div>
      <!-- <div v-if="this.$route.name === 'DashboardHome'">
        <DashboardHeader />
      </div> -->
      <div
        v-if="
          this.$route.name !== 'Home' &&
            this.$route.name !== 'SignIn' &&
            this.$route.name !== 'Register' &&
            this.$route.name !== 'DashboardHome' &&
            this.$route.name !== 'DashboardAreas' &&
            this.$route.name !== 'DashboardAddAreas' &&
            this.$route.name !== 'DashboardEditAreas' &&
            this.$route.name !== 'DashboardCourses' &&
            this.$route.name !== 'DashboardAddCourses' &&
            this.$route.name !== 'DashboardEditCourses' &&
            this.$route.name !== 'DashboardMedia' &&
            this.$route.name !== 'DashboardEditMedia' &&
            this.$route.name !== 'DashboardAddMedia' &&
            this.$route.name !== 'DashboardProjects' &&
            this.$route.name !== 'DashboardAddProjects' &&
            this.$route.name !== 'DashboardEditProjects' &&
            this.$route.name !== 'DashboardUnities' &&
            this.$route.name !== 'DashboardAddUnities' &&
            this.$route.name !== 'DashboardEditUnities' &&
            this.$route.name !== 'DashboardCareers' &&
            this.$route.name !== 'DashboardEditCareers' &&
            this.$route.name !== 'DashboardAddCareers' &&
            this.$route.name !== 'DashboardProfile' &&
            this.$route.name !== 'DashboardUsers' &&
            this.$route.name !== 'DashboardAddUsers' &&
            this.$route.name !== 'DashboardComponents' &&
            this.$route.name !== 'DashboardAboutUs' &&
            this.$route.name !== 'DashboardTN' &&
            this.$route.name !== 'DashboardEditNews' &&
            this.$route.name !== 'DashboardAddPage' &&
            this.$route.name !== 'DashboardProjectFiles' &&
            this.$route.name !== 'DashboardAddNews' &&
            this.$route.name !== 'DashboardAddProjectNews' &&
            this.$route.name !== 'DashboardAreaConnection' &&
            this.$route.name !== 'DashboardUnitConnection' &&
            this.$route.name !== 'DashboardCourseConnection'
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mapGetters } from "vuex";

export default {
  components: {
    SubHeader,
    Header
  },
  data: () => {
    return {
      previous__scroll__pos: null,
      currLang: "",
      data: "",
      loading: false
    };
  },
  async created() {
    this.loadingStatus;
  },
  mounted() {
    console.clear();

    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", this.handleScroll);

    this.previous__scroll__pos = window.pageYOffset;

    this.currLang = this.getCurrLang;
    this.getLang();
  },
  computed: {
    ...mapGetters(["getCurrLang", "getEntityData"]),
    loadingStatus() {
      let loading = this.loading;
      loading = true;

      if (this.$store.getters.getEntityStatus == 200) loading = false;

      return loading;
    }
  },
  methods: {
    async handleAPI() {
      try {
        await this.$store.dispatch("setEntityId");
        await this.$store.dispatch("setData");
        await this.$store.dispatch("setMenus");
      } catch (error) {
        return error;
      }
    },
    handleScroll() {
      if (
        document.querySelector(".navbar") != null &&
        document.querySelector(".phone_navbar") != null
      ) {
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
      }
    },
    getLang() {
      this.$i18n.locale = this.currLang;

      if (
        document.querySelector(".en") != null &&
        document.querySelector(".pt")
      ) {
        let enBtn = document.querySelector(".en");
        let ptBtn = document.querySelector(".pt");

        this.$i18n.locale == "en"
          ? enBtn.classList.add("selected")
          : ptBtn.classList.add("selected");
      }

      this.$store.commit("SET_LOCALE", this.$i18n.locale);

      this.$store.commit("SET_SELECTED_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.handleAPI();
    }
  }
};
</script>

<style lang="scss">
@import "../css/style.css";
</style>
