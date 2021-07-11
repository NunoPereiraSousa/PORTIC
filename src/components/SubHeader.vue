<template>
  <header class="subheader grid">
    <div class="subheader__contacts flex flex-jc-sb flex-ai-c">
      <div class="email flex flex-jc-sb flex-ai-c">
        <i class="fa fa-envelope"></i>
        <div v-if="loading" class="blocks_wrapper flex flex-ai-c flex-jc-sb">
          <div class="blocks"></div>
          <div class="blocks"></div>
          <div class="blocks"></div>
        </div>
        <div v-else>
          <a :href="`mailto:${$store.getters.getEntityData.emails[0]}`">{{
            $store.getters.getEntityData.emails[0]
          }}</a>
        </div>
      </div>

      <div class="hide-for-mobile phone flex flex-jc-sb flex-ai-c">
        <i class="fas fa-phone-volume"></i>
        <div v-if="loading" class="blocks_wrapper flex flex-ai-c flex-jc-sb">
          <div class="blocks"></div>
          <div class="blocks"></div>
          <div class="blocks"></div>
        </div>
        <div v-else>
          <a :href="`tel:+351${$store.getters.getEntityData.contacts[0]}`">{{
            $store.getters.getEntityData.contacts[0]
          }}</a>
        </div>
      </div>
    </div>
    <div class="subheader__socials flex flex-jc-sb flex-ai-c hide-above-phone">
      <div v-if="loading" class="blocks_wrapper flex flex-ai-c flex-jc-sb">
        <div class="blocks"></div>
        <div class="blocks"></div>
        <div class="blocks"></div>
      </div>
      <div class="flex flex-jc-sb flex-ai-c" v-else>
        <a
          v-for="media in $store.getters.getEntitySocials"
          :key="media.name"
          :href="media.url"
          target="_blank"
        >
          <div v-if="media.name == 'Twitter'">
            <i class="fab fa-twitter"></i>
          </div>
          <div v-else-if="media.name == 'Facebook'">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div v-else-if="media.name == 'LinkedIn'">
            <i class="fab fa-linkedin"></i>
          </div>
          <div v-else-if="media.name == 'Youtube'">
            <i class="fab fa-youtube"></i>
          </div>
          <div v-else-if="media.name == 'Instagram'">
            <i class="fab fa-instagram"></i>
          </div>
        </a>
      </div>
    </div>
    <div class="subheader__languages flex flex-jc-sb flex-ai-c">
      <button class="en" @click="changeLangEN">EN</button>
      <hr />
      <button class="pt" @click="changeLangPT">
        PT
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SubHeader",
  data: () => {
    return {
      isDisabled: false
    };
  },
  props: {
    // email: {
    //   type: String,
    //   required: false
    // },
    // phoneNumber: {
    //   type: String,
    //   required: false
    // },
    // socials: {
    //   type: Array,
    //   required: false
    // },
    loading: {
      type: Boolean,
      required: false
    }
  },
  created() {
    this.selectedNews = JSON.parse(localStorage.getItem("news"));
  },
  computed: {
    ...mapGetters([
      // news getters
      "getNews",
      "getSelectedNewsId",
      // project getters
      "getProjects",
      "getSelectedProjectByID"
    ]),
    getCurrentNews() {
      return this.getNews;
    },
    getCurrentProjects() {
      return this.getProjects;
    }
  },
  methods: {
    changeCurrNews() {
      return this.getCurrentNews.find(
        n => n.id_news === this.getSelectedNewsId
      );
    },
    changeCurrProject() {
      return this.getCurrentProjects.find(
        n => n.id_project === this.getSelectedProjectByID
      );
    },
    async handleAPI() {
      try {
        await this.$store.dispatch("setData");

        this.currentRouteName();
      } catch (error) {
        console.log(`App: ${error}`);
        return error;
      }
    },
    async currentRouteName() {
      // await this.$store.dispatch("setEntityId");

      switch (this.$route.name) {
        case "Contacts":
          try {
            await this.$store.dispatch("setAreas");
            await this.$store.dispatch("setAreasGroups");
            await this.$store.dispatch("setMenus");
          } catch (error) {
            return error;
          }
          break;
        case "Courses":
          try {
            await this.$store.dispatch("setCourses");
            await this.$store.dispatch("setCoursesFocus");
            await this.$store.dispatch("setMenus");
          } catch (error) {
            return error;
          }
          break;
        case "Home":
          try {
            await this.$store.dispatch("setNews");
            await this.$store.dispatch("setReviews");

            localStorage.setItem(
              "news",
              JSON.stringify(this.$store.getters.getNews)
            );
          } catch (error) {
            return error;
          }
          break;
        case "Media":
          try {
            await this.$store.dispatch("setMedias");
            await this.$store.dispatch("setMenus");

            localStorage.setItem(
              "news",
              JSON.stringify(this.$store.getters.getNews)
            );
          } catch (error) {
            return error;
          }
          break;
        case "News":
          try {
            await this.$store.dispatch("setNews");

            localStorage.setItem(
              "news",
              JSON.stringify(this.$store.getters.getNews)
            );
          } catch (error) {
            return error;
          }
          break;
        case "ProjectsCatalog":
          try {
            await this.$store.dispatch("setProjects");

            localStorage.setItem(
              "projects",
              JSON.stringify(this.$store.getters.getProjects)
            );
          } catch (error) {
            return error;
          }
          break;
        case "Project":
          try {
            await this.$store.dispatch("setProjects");

            localStorage.setItem(
              "projects",
              JSON.stringify(this.getCurrentProjects)
            );

            localStorage.setItem(
              "currProject",
              JSON.stringify(this.changeCurrProject())
            );
          } catch (error) {
            return error;
          }
          break;
        case "NewsPage":
          try {
            await this.$store.dispatch("setNews");

            localStorage.setItem("news", JSON.stringify(this.getCurrentNews));

            localStorage.setItem(
              "currNews",
              JSON.stringify(this.changeCurrNews())
            );
          } catch (error) {
            return error;
          }

          break;
        case "SiteMap":
          try {
            await this.$store.dispatch("setAreas");
            await this.$store.dispatch("setCourses");
            await this.$store.dispatch("setMedias");
            await this.$store.dispatch("setMenus");
            await this.$store.dispatch("setProjects");
            await this.$store.dispatch("setUnities");
          } catch (error) {
            return error;
          }
          break;
        case "Unities":
          try {
            await this.$store.dispatch("setMenus");
            await this.$store.dispatch("setUnities");
          } catch (error) {
            return error;
          }
          break;
        case "Positions":
          // try {
          // } catch (error) {
          //   console.log(`App: ${error}`);
          //   return error;
          // }
          break;
        default:
          break;
      }
    },
    changeLangEN() {
      this.$i18n.locale = "en";

      let enBtn = document.querySelector(".en");
      let ptBtn = document.querySelector(".pt");

      ptBtn.classList.remove("selected");
      enBtn.classList.add("selected");

      this.$store.commit("SET_LOCALE", this.$i18n.locale);

      this.$store.commit("SET_SELECTED_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_AREAS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_CAREERS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_COURSES_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_MEDIAS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_NEWS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_PROJECTS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_UNITIES_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_REVIEWS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.handleAPI();
    },
    changeLangPT() {
      this.$i18n.locale = "pt";

      let enBtn = document.querySelector(".en");
      let ptBtn = document.querySelector(".pt");

      enBtn.classList.remove("selected");
      ptBtn.classList.add("selected");

      this.$store.commit("SET_LOCALE", this.$i18n.locale);

      this.$store.commit("SET_SELECTED_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_AREAS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_CAREERS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_COURSES_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_MEDIAS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_NEWS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_PROJECTS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_UNITIES_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.$store.commit("SET_SELECTED_REVIEWS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      this.handleAPI();
    }
  }
};
</script>

<style></style>
