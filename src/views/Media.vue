<template>
  <div>
    <SubPageIntro
      categoryTitle="Medias"
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
    <MainTitle className="main__title" text="Explore our medias" />
    <section class="media">
      <div class="media__grid grid">
        <!-- :videoURL="convertToYoutubeURL(medias.url)" -->
        <MediaCard
          v-for="i in 4"
          :key="i"
          :counter="i"
          title="Portuguese Minister of Labour, Solidarity and Social Security, Ana Godinho, visits PORTIC."
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
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
  // https://www.youtube.com/watch?v=t4-8lJ0ALNU
  methods: {
    convertToYoutubeURL(url) {
      url = "https://www.youtube.com/watch?v=t4-8lJ0ALNU";

      let urlArr = url.split("/");

      let urlID = urlArr[urlArr.length - 1].replace("watch?v=", "");

      return `https://www.youtube.com/embed/${urlID}`;
    }
  }
};
</script>

<style></style>
