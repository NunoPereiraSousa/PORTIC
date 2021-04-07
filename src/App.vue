<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="headers">
      <SubHeader />
      <div v-if="this.$route.name === 'Home'">
        <Header theme="transparent" />
      </div>
      <div v-else><Header theme="normal" /></div>
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
  data: () => {
    return {
      previous__scroll__pos: null
    };
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", this.handleScroll);

    this.previous__scroll__pos = window.pageYOffset;
  },
  methods: {
    handleScroll() {
      let navbar = document.querySelector(".navbar");
      let navbarLogo = document.querySelector("#logo");
      // let header = document.querySelector(".headers").offsetHeight;
      // let current__scroll__pos = window.pageYOffset;
      // let headers = document.querySelector(".headers");

      ScrollTrigger.create({
        trigger: ".landing",
        endTrigger: ".footer",
        start: "bottom top-=-80",
        end: "bottom top-=-80",
        toggleClass: {
          targets: navbar,
          className: "scroll"
        }
      });

      if (navbar.classList.contains("scroll")) {
        navbarLogo.src = "/img/PORTIC_LOGO_laranja.f448abb8.svg";
      } else {
        navbarLogo.src = "/img/PORTIC_LOGO.78c408bf.svg";
      }

      // if (this.previous__scroll__pos > current__scroll__pos) {
      //   headers.style.top = "0px";
      // } else {
      //   headers.style.top = `-${header}px`;
      // }
      // this.previous__scroll__pos = current__scroll__pos;
    }
  }
};
</script>

<style lang="scss">
@import "../css/style.css";
</style>
