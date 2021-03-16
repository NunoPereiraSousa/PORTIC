<template>
  <div class="projects">
    <div class="scene"></div>
    <Intro extra="our " keyword="Projects" />
    <Quote />
    <div class="projects__grid grid">
      <ProjectCard v-for="i in 12" :key="i" :counter="i" />
    </div>

    <KnowMoreBtn
      backgroundColor="transparent"
      color="#080808"
      border="1px solid #080808"
    />
    <Footer />
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Quote from "@/components/Quote.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import KnowMoreBtn from "@/components/KnowMoreBtn.vue";
import Footer from "@/components/Footer.vue";
import { background } from "../../js/background";

export default {
  components: {
    Intro,
    Quote,
    ProjectCard,
    KnowMoreBtn,
    Footer
  },
  mounted() {
    background();
  }
};
</script>
