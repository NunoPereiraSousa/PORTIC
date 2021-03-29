<template>
  <div class="projects">
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Projects" /> -->
    <SubPageIntro
      categoryTitle="Projects"
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
    <MainTitle className="main__title" text="Explore our projects" />
    <div class="projects__grid grid">
      <ProjectCard
        v-for="i in 12"
        :key="i"
        :counter="i"
        @mouseover.native="onHover"
        @mouseleave.native="notHover"
      />
    </div>

    <KnowMoreBtn
      type="know__more light"
      text="See all Projects"
      whereTo="ProjectsCatalog"
    />
    <Footer />
  </div>
</template>

<script>
import SubPageIntro from "@/components/SubPageIntro.vue";
import MainTitle from "@/components/MainTitle.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import KnowMoreBtn from "@/components/KnowMoreBtn.vue";
import Footer from "@/components/Footer.vue";
// import { background } from "../../js/background";
// import gsap from "gsap";

export default {
  components: {
    SubPageIntro,
    MainTitle,
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
    // background();
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
