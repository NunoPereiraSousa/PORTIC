<template>
  <div>
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Areas" /> -->
    <SubPageIntro
      categoryTitle="Áreas"
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
    <MainTitle className="main__title" text="Explore as nossas áreas" />
    <section class="areas">
      <div class="areas__grid grid">
        <AreasCard
          v-for="area in areas"
          :key="area.id"
          :counter="area.id"
          :index="area.id"
          :button_id="area.id"
          :card_id="`card_${area.id}`"
          :areaName="area.areaName"
          :areaDesc="area.areaDesc"
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
import AreasCard from "@/components/AreasCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    // Intro,
    SubPageIntro,
    MainTitle,
    AreasCard,
    Footer
  },
  data: () => {
    return {
      areas: null
    };
  },
  mounted() {
    this.areas = this.getAreas;
  },
  computed: {
    ...mapGetters(["getAreas"])
  }
};
</script>
