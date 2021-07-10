<template>
  <header>
    <nav
      class="navbar flex flex-jc-sb flex-ai-c hide-above-phone-iPadPro"
      :class="theme"
    >
      <router-link class="navbar__logo" :to="{ name: 'Home' }">
        <div v-if="loading" class="blocks_wrapper flex flex-ai-c flex-jc-sb">
          <div class="blocks"></div>
          <div class="blocks"></div>
          <div class="blocks"></div>
        </div>
        <div v-else>
          <img :src="displayLogo" alt="PORTIC" id="logo" />
        </div>
      </router-link>
      <div class="navbar__desktop_menu hide-for-mobile">
        <div class="navbar__desktop_menu__links flex">
          <div v-if="loading">
            <div
              v-if="loading"
              class="blocks_wrapper flex flex-ai-c flex-jc-sb"
            >
              <div class="blocks"></div>
              <div class="blocks"></div>
              <div class="blocks"></div>
            </div>
          </div>
          <div v-else>
            <router-link
              v-for="menu in menus"
              :key="menu.id_menu"
              :to="{ name: menu.router_link }"
              @click.native="setMenu(menu.id_menu)"
            >
              {{ menu.menu_designation }}
            </router-link>
            <!-- <button @click="openDropdown">
              Entidades

              <div
                class="navbar__desktop_menu__dropdown flex  flex-fd-c"
                v-if="open == true"
              >
                <h3
                  class="dropdown_links"
                  @click="
                    openUnitiesPage((id = 1), (title = 'Porto Design Factory'))
                  "
                >
                  Porto Design Factory
                </h3>
                <h3
                  class="dropdown_links"
                  @click="openUnitiesPage((id = 2), (title = 'Startup Porto'))"
                >
                  Startup Porto
                </h3>
                <h3
                  class="dropdown_links"
                  @click="
                    openUnitiesPage(
                      (id = 3),
                      (title = 'Porto Business Innovation')
                    )
                  "
                >
                  Porto Business Innovation
                </h3>
              </div>
            </button> -->
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar phone_navbar hide-for-desktop" :class="theme">
      <div class="flex flex-ai-c flex-jc-sb">
        <router-link class="navbar__logo" :to="{ name: 'Home' }">
          <div v-if="loading" class="blocks_wrapper flex flex-ai-c flex-jc-sb">
            <div class="blocks"></div>
            <div class="blocks"></div>
            <div class="blocks"></div>
          </div>
          <div v-else>
            <img
              :src="displayLogo"
              alt="PORTIC"
              id="logo"
              @click="closeNavbarOnPageTransition"
            />
          </div>
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
                v-for="menu in menus"
                :key="menu.id_menu"
                :to="{ name: menu.router_link }"
                @click.native="closeNavbarOnPageTransition(menu.id_menu)"
              >
                {{ menu.menu_designation }}
              </router-link>
            </div>
          </div>
          <div class="navbar__content__sec_links">
            <hr />
            <h3>{{ $t("footer.links.title") }}</h3>
            <router-link
              @click.native="closeNavbarOnPageTransition(0)"
              class="navbar__mobile_menu__grid__links__link"
              :to="{ name: 'Contacts' }"
            >
              {{ $t("navbar.items[0]") }}
            </router-link>
          </div>
          <div class="navbar__content__socials">
            <hr />
            <h3>{{ $t("footer.socials.title") }}</h3>
            <div class="flex flex-ai-c">
              <a
                v-for="media in socials"
                :key="media.name"
                :href="media.url"
                target="_blank"
              >
                <div v-if="media.name == 'Twitter'">
                  <i class="fab fa-twitter"></i>
                </div>
                <div v-else-if="media.name == 'Facebook'">
                  <i class="fab fa-facebook-square"></i>
                </div>
                <div v-else-if="media.name == 'LinkedIn'">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div v-else-if="media.name == 'Youtube'">
                  <i class="fab fa-youtube"></i>
                </div>
                <div v-else-if="media.name == 'Instagram'">
                  <i class="fab fa-instagram"></i>
                </div>
              </a>
            </div>
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
  data: () => {
    return {
      open: false
    };
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    displayLogo() {
      if (!this.loading) {
        let image = this.$store.getters.getEntityData.img;
        return image;
      }

      return null;
    },
    socials() {
      return this.$store.getters.getEntityData.social_medias;
    },
    menus() {
      console.log(this.$store.getters.getEntityData);
      return this.$store.getters.getEntityData.menus;
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
    closeNavbarOnPageTransition(id) {
      localStorage.setItem("selectedMenu", JSON.stringify(id));

      this.$store.commit("SET_SELECTED_MENU", {
        id: id
      });

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
    },
    openDropdown() {
      this.open = !this.open;
    },
    openUnitiesPage(id, title) {
      console.log(id, title);
      this.$store.commit("SET_SELECTED_UNITY_ID", { id: id });

      this.$router.push({
        name: "UnitiesPage",
        params: { name: title }
      });
    },
    setMenu(id) {
      localStorage.setItem("selectedMenu", JSON.stringify(id));
      this.$store.commit("SET_SELECTED_MENU", {
        id: id
      });
    }
  }
};
</script>
