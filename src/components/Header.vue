<template>
  <header>
    <nav
      class="navbar flex flex-jc-sb flex-ai-c hide-above-phone-iPadPro"
      :class="theme"
    >
      <router-link class="navbar__logo" :to="{ name: 'Home' }">
        <img
          src="../../assets/svg/PORTIC_LOGO.svg"
          alt="PORTIC"
          id="logo"
          @click="closeNavbarOnPageTransition"
        />
      </router-link>
      <!-- <div class="navbar__hamburger hide-for-desktop" @click="toggleNavbar">
        <div class="navbar__hamburger__lines"></div>
        <div class="navbar__hamburger__lines"></div>
        <div class="navbar__hamburger__lines"></div>
      </div>
      <div class="navbar__mobile_menu hide-for-desktop">
        <div class="navbar__mobile_menu__links">
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'Contacts' }"
          >
            Sobre nós
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'Positions' }"
          >
            Recrutamento
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'Areas' }"
          >
            Áreas
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'Courses' }"
          >
            Cursos
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'Media' }"
          >
            Mídia
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'ProjectsCatalog' }"
          >
            Projetos
          </router-link>
          <router-link
            @click.native="closeNavbarOnPageTransition"
            class="navbar__mobile_menu__grid__links__link"
            :to="{ name: 'Unities' }"
          >
            Unidades
          </router-link>
        </div>
      </div> -->
      <!-- <div
        class="navbar__mobile_menu flex flex-ai-c flex-fd-c flex-jc-c hide-for-desktop"
      >
        <div class="navbar__mobile_menu__grid grid">
          <div class="navbar__mobile_menu__grid__info">
            <h1>portic</h1>
            <p>An open door towards the future</p>
            <hr />
          </div>
          <div class="navbar__mobile_menu__grid__links">
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Contacts' }"
            >
              Sobre nós
            </router-link>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Positions' }"
            >
              Recrutamento
            </router-link>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Areas' }"
            >
              Áreas
            </router-link>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Courses' }"
            >
              Cursos
            </router-link>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Media' }"
            >
              Mídia
            </router-link>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'ProjectsCatalog' }"
            >
              Projetos
            </router-link>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Unities' }"
            >
              Unidades
            </router-link>
          </div>
          <div class="navbar__mobile_menu__grid__socials grid">
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
        </div>
        <div class="navbar__mobile_menu__policy">
          <p>Privacy Policy & © Copy Right 2021</p>
        </div>
      </div> -->

      <div class="navbar__desktop_menu hide-for-mobile">
        <div class="navbar__desktop_menu__links flex">
          <router-link :to="{ name: 'Contacts' }">
            {{ $t("navbar.items[0]") }}
          </router-link>
          <router-link :to="{ name: 'Unities' }">
            {{ $t("navbar.items[1]") }}
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            {{ $t("navbar.items[2]") }}
          </router-link>
          <router-link :to="{ name: 'Courses' }">
            {{ $t("navbar.items[3]") }}
          </router-link>
          <router-link :to="{ name: 'ProjectsCatalog' }">
            {{ $t("navbar.items[4]") }}
          </router-link>
          <router-link :to="{ name: 'Media' }">
            {{ $t("navbar.items[5]") }}
          </router-link>
          <router-link :to="{ name: 'Positions' }">
            {{ $t("navbar.items[6]") }}
          </router-link>
        </div>
      </div>
    </nav>
    <nav class="navbar phone_navbar hide-for-desktop" :class="theme">
      <div class="flex flex-ai-c flex-jc-sb">
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
      </div>
      <div class="navbar__toggle collapse">
        <div class="navbar__content flex flex-fd-c">
          <div class="navbar__content__main_links flex flex-fd-c">
            <h3>Links</h3>
            <hr />
            <div class="navbar__content__main_links__grid grid">
              <router-link
                @click.native="closeNavbarOnPageTransition"
                class="navbar__mobile_menu__grid__links__link"
                :to="{ name: 'Unities' }"
              >
                {{ $t("navbar.items[1]") }}
              </router-link>
              <router-link
                @click.native="closeNavbarOnPageTransition"
                class="navbar__mobile_menu__grid__links__link"
                :to="{ name: 'Areas' }"
              >
                {{ $t("navbar.items[2]") }}
              </router-link>
              <router-link
                @click.native="closeNavbarOnPageTransition"
                class="navbar__mobile_menu__grid__links__link"
                :to="{ name: 'Courses' }"
              >
                {{ $t("navbar.items[3]") }}
              </router-link>
              <router-link
                @click.native="closeNavbarOnPageTransition"
                class="navbar__mobile_menu__grid__links__link"
                :to="{ name: 'ProjectsCatalog' }"
              >
                {{ $t("navbar.items[4]") }}
              </router-link>
              <router-link
                @click.native="closeNavbarOnPageTransition"
                class="navbar__mobile_menu__grid__links__link"
                :to="{ name: 'Media' }"
              >
                {{ $t("navbar.items[5]") }}
              </router-link>
              <router-link
                @click.native="closeNavbarOnPageTransition"
                class="navbar__mobile_menu__grid__links__link"
                :to="{ name: 'Positions' }"
              >
                {{ $t("navbar.items[6]") }}
              </router-link>
            </div>
          </div>
          <div class="navbar__content__sec_links">
            <hr />
            <h3>{{ $t("footer.links.title") }}</h3>
            <router-link
              @click.native="closeNavbarOnPageTransition"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Contacts' }"
            >
              {{ $t("navbar.items[0]") }}
            </router-link>
          </div>
          <div class="navbar__content__socials">
            <hr />
            <h3>{{ $t("footer.socials.title") }}</h3>
            <a href="https://twitter.com/politecnico" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/politecnicodoporto/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.flickr.com/people/politecnicodoporto/"
              target="_blank"
            >
              <i class="fab fa-flickr"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCa0njrkoyEd8kwjIVPE5pNg"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/portic-pporto/mycompany/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/porticpporto" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
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

      document.querySelector("#app").style.overflow = "hidden";

      let navbar = document.querySelector(".phone_navbar");

      navbar.classList.toggle("open");
      let navbar__toggle = document.querySelector(".navbar__toggle");

      if (navbar.classList.contains("open")) {
        navbar__toggle.style.display = "block";
        let height = navbar__toggle.clientHeight;

        if (!navbar.classList.contains("normal")) {
          navbar.style.backgroundColor = "#080808";
        } else {
          navbar.style.backgroundColor = "#ffffff";
        }

        setTimeout(() => {
          navbar__toggle.style.height = `${height}px`;
          navbar__toggle.style.display = "";
        }, 1);

        navbar__toggle.classList = "navbar__toggle collapsing";

        setTimeout(() => {
          navbar__toggle.classList = "navbar__toggle open";
        }, 300);
      } else {
        navbar__toggle.classList = "navbar__toggle collapsing";

        setTimeout(() => {
          navbar__toggle.style.height = "0px";
        }, 1);

        setTimeout(() => {
          navbar__toggle.classList = "navbar__toggle collapse";
          navbar__toggle.style.height = "";
          navbar.style.backgroundColor = "transparent";
        }, 300);

        setTimeout(() => {
          navbar.style.backgroundColor = "";
        }, 301);
      }
    },
    closeNavbarOnPageTransition() {
      let lines = document.querySelectorAll(".navbar__hamburger__lines");

      let navbar__toggle = document.querySelector(".navbar__toggle");
      let navbar = document.querySelector(".phone_navbar");

      if (navbar.classList.contains("open")) {
        lines.forEach(line => {
          line.classList.toggle("open");
        });

        navbar.classList.toggle("open");

        setTimeout(() => {
          navbar__toggle.classList = "navbar__toggle collapse";
          navbar__toggle.style.height = "";
        }, 1);

        setTimeout(() => {
          navbar.style.backgroundColor = "transparent";
        }, 300);

        setTimeout(() => {
          navbar.style.backgroundColor = "";
        }, 301);
      } else if (navbar.classList.contains("normal")) {
        lines.forEach(line => {
          if (line.classList.contains("open")) {
            line.classList.toggle("open");
          }
        });

        setTimeout(() => {
          navbar__toggle.classList = "navbar__toggle collapse";
          navbar__toggle.style.height = "";
        }, 1);

        setTimeout(() => {
          navbar.style.backgroundColor = "transparent";
        }, 300);

        setTimeout(() => {
          navbar.style.backgroundColor = "";
        }, 301);
      }
    }
  }
};
</script>
