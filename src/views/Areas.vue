<template>
  <div>
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Areas" /> -->
    <SubPageIntro
      categoryTitle="Areas"
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
    <MainTitle className="main__title" text="Explore our areas" />
    <section class="areas">
      <!-- <Quote /> -->

      <div class="areas__grid grid">
        <AreasCard
          v-for="i in 6"
          :key="i"
          :counter="i"
          :index="i"
          :button_id="i"
          :card_id="`card_${i}`"
          areaName="Industry 4.0"
          areaDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <!-- <AreasCard
          v-for="i in 6"
          :key="i"
          areaName="Industry 4.0"
          areaDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        /> -->
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// import Intro from "@/components/Intro.vue";
import SubPageIntro from "@/components/SubPageIntro.vue";
import MainTitle from "@/components/MainTitle.vue";
import AreasCard from "@/components/AreasCard.vue";
import Footer from "@/components/Footer.vue";
// import { background } from "../../js/background";
export default {
  components: {
    // Intro,
    SubPageIntro,
    MainTitle,
    AreasCard,
    Footer
  },
  mounted() {
    // background();
  }
};
</script>
