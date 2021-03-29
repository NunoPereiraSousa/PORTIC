<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="headers">
      <SubHeader />
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import Header from "@/components/Header.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    SubHeader,
    Header
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let navbar = document.querySelector(".navbar");

      ScrollTrigger.create({
        trigger: ".landing",
        endTrigger: ".footer",
        start: "bottom top-=-80",
        end: "bottom top-=-80",
        toggleClass: {
          targets: navbar,
          className: "scroll"
        },
        markers: true
      });
    }
  }
};
</script>

<style lang="scss">
@import "../css/style.css";
</style>
