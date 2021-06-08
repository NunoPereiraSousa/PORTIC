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
          <a :href="`mailto:${email}`">{{ email }}</a>
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
          <a :href="`tel:+351${phoneNumber}`">{{ phoneNumber }}</a>
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
          v-for="media in socials"
          :key="media.social_media_type"
          :href="media.url"
          target="_blank"
        >
          <div v-if="media.social_media_type == 'Twitter'">
            <i class="fab fa-twitter"></i>
          </div>
          <div v-else-if="media.social_media_type == 'Facebook'">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div v-else-if="media.social_media_type == 'LinkedIn'">
            <i class="fab fa-linkedin"></i>
          </div>
          <div v-else-if="media.social_media_type == 'Youtube'">
            <i class="fab fa-youtube"></i>
          </div>
          <div v-else-if="media.social_media_type == 'Instagram'">
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
    email: {
      type: String,
      required: false
    },
    phoneNumber: {
      type: String,
      required: false
    },
    socials: {
      type: Array,
      required: false
    },
    loading: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    ...mapGetters(["getEntityData"])
  },
  methods: {
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
      switch (this.$route.name) {
        case "Contacts":
          try {
            await this.$store.dispatch("setEntityId");
            await this.$store.dispatch("setEntityFocuses");
          } catch (error) {
            console.log(`App: ${error}`);
            return error;
          }
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

      this.handleAPI();
    }
  }
};
</script>

<style></style>
