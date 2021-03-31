<template>
  <div>
    <SubPageIntro
      categoryTitle="Mídia"
      title1="Title 1"
      text1="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title2="Title 2"
      text2="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title3="Title 3"
      text3="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title4="Title 4"
      text4="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      categoryDescription="Here goes some text about the projects and strategies PORTIC
      adotps in the projects ipsum dolor sit amet, consectetur 
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
