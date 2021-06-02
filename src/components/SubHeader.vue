<template>
  <header class="subheader grid">
    <div class="subheader__contacts flex flex-jc-sb flex-ai-c">
      <div class="email flex flex-jc-sb flex-ai-c">
        <i class="fa fa-envelope"></i>
        <a href="mailto:portic@portic.ipp.pt">{{
          $store.getters.getEntityEmail
        }}</a>
      </div>

      <div class="hide-for-mobile phone flex flex-jc-sb flex-ai-c">
        <i class="fas fa-phone-volume"></i>
        <a href="tel:+351225571020">{{
          $store.getters.getEntityPhoneNumber
        }}</a>
      </div>
    </div>
    <div class="subheader__socials flex flex-jc-sb flex-ai-c hide-above-phone">
      <a
        v-for="media in $store.getters.getEntitySocials"
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
  computed: {
    ...mapGetters(["getEntityData"])
  },
  methods: {
    async handleAPI() {
      try {
        await this.$store.dispatch("setData");

        console.log(this.getEntityData);

        // console.log(`LANG: ${this.$i18n.locale}`);

        // this.getEntityData.menus.forEach(menu => {
        //   console.log(menu);
        // });
      } catch (error) {
        console.log(`App: ${error}`);
        return error;
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
