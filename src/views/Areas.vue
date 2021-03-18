<template>
  <div>
    <div class="scene"></div>
    <Intro extra="our " keyword="Areas" />
    <section class="areas">
      <!-- <Quote /> -->
      <h1 class="areas__title">Explore our Areas of Actuation:</h1>
      <div class="areas__grid grid">
        <!-- <AreasCard
          v-for="i in 6"
          :key="i"
          :index="i"
          :button_id="i"
          :card_id="`card_${i}`"
          areaName="Industry 4.0"
          areaDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        /> -->

        <AreasCard
          v-for="i in 6"
          :key="i"
          areaName="Industry 4.0"
          areaDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
// import Quote from "@/components/Quote.vue";
import AreasCard from "@/components/AreasCard.vue";
import Footer from "@/components/Footer.vue";
import { background } from "../../js/background";
export default {
  components: {
    Intro,
    // Quote,
    AreasCard,
    Footer
  },
  mounted() {
    background();
  }
};
</script>
