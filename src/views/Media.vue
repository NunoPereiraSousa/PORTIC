<template>
  <div>
    <SubPageIntro
      :categoryTitle="$t('medias.mediasKey')"
      :title1="$t('medias.nMedias')"
      :text1="$t('medias.nMediasDesc', { n: $store.getters.getNMedias })"
      :title2="$t('medias.mediasTitle2')"
      :text2="$t('medias.mediasTitle2Desc')"
      content="Research and development, technology and knowledge transfer, innovation and creativity, entrepreneurship, incubation, spin-offs, startups – these are all part of Research, Technology & Innovation, a holistic chain of interrelated activities.
PORTIC includes units and groups with activities in different stages of the knowledge and innovation chain, in several areas of knowledge."
      :categoryDescription="$t('medias.infoDesc')"
    />
    <MainTitle className="main__title" :text="$t('medias.title')" />
    <section class="media">
      <div class="media__grid grid">
        <!-- :videoURL="convertToYoutubeURL(medias.url)" -->
        <MediaCard
          v-for="media in getMedias"
          :key="media.id"
          :counter="media.id"
          :videoURL="convertToYoutubeURL(media.videoURL)"
          :title="media.title"
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
  mounted() {
    this.convertToYoutubeURL();
  },
  computed: {
    ...mapGetters(["getMediasPT", "getMediasEN"]),
    getMedias() {
      let mediasPT = this.getMediasPT;
      let mediasEN = this.getMediasEN;

      return this.$i18n.locale == "pt" ? mediasPT : mediasEN;
    }
  },
  // https://www.youtube.com/watch?v=t4-8lJ0ALNU
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
