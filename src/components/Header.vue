<template>
  <header>
    <nav class="navbar flex flex-jc-sb flex-ai-c">
      <router-link class="navbar__logo" :to="{ name: 'Home' }">
        <img src="../assets/logo.png" alt="PORTIC" />
      </router-link>
      <div class="navbar__hamburger hide-for-desktop" @click="toggleNavbar">
        <div class="navbar__hamburger__lines"></div>
        <div class="navbar__hamburger__lines"></div>
        <div class="navbar__hamburger__lines"></div>
      </div>
      <div class="navbar__mobile_menu grid hide-for-desktop">
        <div class="navbar__mobile_menu__info">
          <h1>portic</h1>
          <p>An open door towards the future</p>
          <hr />
        </div>
        <div class="navbar__mobile_menu__links">
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Areas' }"
          >
            Areas
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Courses' }"
          >
            Courses
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition()"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Media' }"
          >
            Media
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition()"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Positions' }"
          >
            Positions
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Projects' }"
          >
            Projects
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Unities' }"
          >
            Unities
          </router-link>
        </div>
        <div class="navbar__mobile_menu__socials grid">
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-flickr"></i>
          </a>
          <a href="">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
        <div class="navbar__mobile_menu__policy">
          <p>Privacy Policy & © Copy Right 2021</p>
        </div>
      </div>
      <div class="navbar__desktop_menu hide-for-mobile">
        <div class="navbar__desktop_menu__links flex">
          <router-link :to="{ name: 'Areas' }">
            Areas
          </router-link>
          <router-link :to="{ name: 'Courses' }">
            Courses
          </router-link>
          <router-link :to="{ name: 'Media' }">
            Media
          </router-link>
          <router-link :to="{ name: 'Positions' }">
            Positions
          </router-link>
          <router-link :to="{ name: 'Projects' }">
            Projects
          </router-link>
          <router-link :to="{ name: 'Unities' }">
            Unities
          </router-link>
        </div>
      </div>
    </nav>
    <div class="navbar__mobile_overlay"></div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleNavbar() {
      let lines = document.querySelectorAll(".navbar__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      // let title = document.querySelector(".header__title");
      // title.classList.toggle("change__color");

      let navbar__mobile_menu = document.querySelector(".navbar__mobile_menu");

      navbar__mobile_menu.classList.toggle("open__overlay");

      let navbar__mobile_overlay = document.querySelector(
        ".navbar__mobile_overlay"
      );
      navbar__mobile_overlay.classList.toggle("overlay_opened");
    },
    closeNavbarOnPageTransition() {
      let lines = document.querySelectorAll(".navbar__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      let navbar__mobile_menu = document.querySelector(".navbar__mobile_menu");

      let navbar__mobile_overlay = document.querySelector(
        ".navbar__mobile_overlay"
      );

      navbar__mobile_menu.classList.toggle("open__overlay");
      navbar__mobile_overlay.classList.toggle("overlay_opened");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
