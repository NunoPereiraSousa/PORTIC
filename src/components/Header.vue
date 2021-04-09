<template>
  <header>
    <nav class="navbar flex flex-jc-sb flex-ai-c" :class="theme">
      <router-link class="navbar__logo" :to="{ name: 'Home' }">
        <img
          src="../../assets/svg/PORTIC_LOGO.svg"
          alt="PORTIC"
          id="logo"
          @click="closeNavbarOnPageTransition"
        />
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
            :to="{ name: 'Contacts' }"
          >
            Sobre nós
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Positions' }"
          >
            Recrutamento
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Areas' }"
          >
            Áreas
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Courses' }"
          >
            Cursos
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Media' }"
          >
            Mídia
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'ProjectsCatalog' }"
          >
            Projetos
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__links__link"
            :to="{ name: 'Unities' }"
          >
            Unidades
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
        <!-- <div class="navbar__mobile_menu__policy">
          <p>Privacy Policy & © Copy Right 2021</p>
        </div> -->
      </div>
      <div class="navbar__desktop_menu hide-for-mobile">
        <div class="navbar__desktop_menu__links flex">
          <router-link :to="{ name: 'Contacts' }">
            Sobre nós
          </router-link>
          <router-link :to="{ name: 'Positions' }">
            Recrutamento
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            Áreas
          </router-link>
          <router-link :to="{ name: 'Courses' }">
            Cursos
          </router-link>
          <router-link :to="{ name: 'Media' }">
            Mídia
          </router-link>
          <router-link :to="{ name: 'ProjectsCatalog' }">
            Projetos
          </router-link>
          <router-link :to="{ name: 'Unities' }">
            Unidades
          </router-link>
        </div>
      </div>
    </nav>
    <!-- <div class="navbar__mobile_overlay hide-for-desktop"></div> -->
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleNavbar() {
      let lines = document.querySelectorAll(".navbar__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      document.querySelector(".headers").style.top = "0";
      document.querySelector(".headers").style.zIndex = "999";

      setTimeout(() => {
        window.scroll(0, 0);
      }, 500);

      document.querySelector("#app").style.overflow = "hidden";

      // let title = document.querySelector(".header__title");
      // title.classList.toggle("change__color");

      let navbar__mobile_menu = document.querySelector(".navbar__mobile_menu");

      navbar__mobile_menu.classList.toggle("open__overlay");

      // let navbar__mobile_overlay = document.querySelector(
      //   ".navbar__mobile_overlay"
      // );
      // navbar__mobile_overlay.classList.toggle("overlay_opened");
    },
    closeNavbarOnPageTransition() {
      let lines = document.querySelectorAll(".navbar__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      let navbar__mobile_menu = document.querySelector(".navbar__mobile_menu");

      // let navbar__mobile_overlay = document.querySelector(
      //   ".navbar__mobile_overlay"
      // );

      navbar__mobile_menu.classList.toggle("open__overlay");
      // navbar__mobile_overlay.classList.toggle("overlay_opened");
    }
  }
};
</script>
