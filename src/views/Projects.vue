<template>
  <div class="projects">
    <div class="scene"></div>
    <Intro extra="our " keyword="Projects" />
    <Quote />
    <div class="projects__grid grid">
      <ProjectCard
        v-for="i in 12"
        :key="i"
        :counter="i"
        @mouseover.native="onHover"
        @mouseleave.native="notHover"
      />
    </div>

    <KnowMoreBtn type="know__more light" />
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
// import gsap from "gsap";

export default {
  components: {
    Intro,
    Quote,
    ProjectCard,
    KnowMoreBtn,
    Footer
  },
  data: () => {
    return {
      selectedItem: null
    };
  },
  mounted() {
    background();
  },
  methods: {
    onHover(element) {
      this.selectedItem = element.target;

      this.selectedItem.classList.toggle("hovered");
    },
    notHover(element) {
      this.selectedItem = element.target;

      this.selectedItem.classList.remove("hovered");
    }
  }
};
</script>
