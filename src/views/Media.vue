<template>
  <div>
    <SubPageIntro
      :categoryTitle="$t('medias.mediasKey')"
      :content="getCurrentMenus.page_description"
    />
    <MainTitle className="main__title" :text="$t('medias.title')" />
    <section class="media">
      <div class="media__grid grid">
        <MediaCard
          v-for="media in $store.getters.getMedias"
          :key="media.id_media"
          :videoURL="convertToYoutubeURL(media.youtube_path)"
          :title="media.description"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SubPageIntro from "@/components/SubPageIntro.vue";
import MainTitle from "@/components/MainTitle.vue";
import MediaCard from "@/components/MediaCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    MainTitle,
    MediaCard,
    Footer
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_MEDIAS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      // await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setMedias");
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters([
      "getMediasPT",
      "getMediasEN",
      "getSelectedMenuID",
      "getMenus"
    ]),
    getMedias() {
      let mediasPT = this.getMediasPT;
      let mediasEN = this.getMediasEN;

      return this.$i18n.locale == "pt" ? mediasPT : mediasEN;
    },
    getCurrentMenus() {
      let menus = this.getMenus;
      console.log(menus);

      return menus
        .filter(menu => menu.id_menu === this.getSelectedMenuID)
        .find(n => n.id_menu === this.getSelectedMenuID);
    }
  },
  methods: {
    convertToYoutubeURL(url) {
      // url = "https://www.youtube.com/watch?v=t4-8lJ0ALNU";

      let urlArr = url.split("/");

      let urlID = urlArr[urlArr.length - 1].replace("watch?v=", "");

      return `https://www.youtube.com/embed/${urlID}`;
    }
  }
};
</script>

<style></style>
