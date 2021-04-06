<template>
  <div>
    <SubPageIntro
      categoryTitle="Mídia"
      title1="Número de mídias"
      :text1="
        `O centro PORTIC incorpora um número total de ${$store.getters.getNMedias} mídias.`
      "
      title2="Conheça a história do PORTIC"
      text2="Disponibilizamos um vídeo onde pode conhecer de mais perto a nossa super estrutura."
      title3="Relembrar eventos importantes"
      text3="Fizemos parte de eventos importantes englobando diversas entidades."
      title4="Acompanhe os nossos passos através do digital"
      text4="Siga passo a passo a estrutura PORTIC."
      categoryDescription="Mais abaixo disponibilizamos vídeos onde pode acompanhar passo a passo a nossa super estrutura e eventos importantes que vão acontecendo."
    />
    <MainTitle className="main__title" text="Assista aos nossos mídias" />
    <section class="media">
      <div class="media__grid grid">
        <!-- :videoURL="convertToYoutubeURL(medias.url)" -->
        <MediaCard
          v-for="media in medias"
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
  data: () => {
    return {
      medias: null
    };
  },
  mounted() {
    this.medias = this.getMedias;
    this.convertToYoutubeURL();
  },
  computed: {
    ...mapGetters(["getMedias"])
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
