<template>
  <div class="positions">
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Projects" /> -->
    <SubPageIntro
      categoryTitle="Positions"
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
    <!-- <MainTitle
      className="main__title"
      text="Everything starts with a small step"
    /> -->

    <section class="positions__find_program">
      <h1 class="positions__find_program__title">
        Everything starts with a small step
      </h1>

      <SubHeaderTitle text="Find your program" />

      <p class="positions__find_program__info">
        Our unique programs provide deep experiences for both interns and
        full-time employees. If you can think on your feet and speak your mind,
        you can help bring the power of conversation to people all over the
        world.
      </p>
    </section>

    <section class="positions__come_prepared">
      <SubHeaderTitle text="Come prepared" class="light" />

      <div class="positions__come_prepared__grid grid">
        <ComePreparedCard
          v-for="tip in tips"
          :key="tip.id"
          :counter="tip.id"
          :title="tip.title"
          :desc="tip.content"
        />
      </div>
    </section>

    <section class="positions__available">
      <SubHeaderTitle text="Come prepared" />
      <div class="positions__available__grid grid">
        <AvailablePositionsCard
          v-for="position in positions"
          :key="position.id"
          :title="position.title"
          :categories="position.categories"
          :content="position.content"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SubPageIntro from "@/components/SubPageIntro.vue";
import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import ComePreparedCard from "@/components/Positions/ComePreparedCard.vue";
import AvailablePositionsCard from "@/components/Positions/AvailablePositionsCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    SubHeaderTitle,
    ComePreparedCard,
    AvailablePositionsCard,
    Footer
  },
  data: () => {
    return {
      tips: null,
      positions: null
    };
  },
  mounted() {
    this.tips = this.getTips;
    this.positions = this.getPositions;
  },
  computed: {
    ...mapGetters(["getPositions", "getTips"])
  }
};
</script>
