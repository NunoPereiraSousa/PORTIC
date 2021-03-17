<template>
  <div>
    <div class="scene"></div>
    <section class="areas">
      <Intro extra="our " keyword="Areas" />
      <Quote />
      <div class="areas__grid grid">
        <AreasCard />
      </div>
    </section>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Quote from "@/components/Quote.vue";
import AreasCard from "@/components/AreasCard.vue";
import { background } from "../../js/background";
export default {
  components: {
    Intro,
    Quote,
    AreasCard
  },
  mounted() {
    background();
  }
};
</script>
