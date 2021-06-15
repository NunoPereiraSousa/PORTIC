<template>
  <div>
    <div class="site_map">
      <SubHeaderTitle :text="$t('sitemap')" />

      <div class="site_map_list flex flex-fd-c">
        <router-link
          v-for="menu in setMenus"
          :key="menu.id_menu"
          :to="{ name: menu.router_link }"
        >
          {{ menu.menu_designation }}
        </router-link>
      </div>

      <SubHeaderTitle :text="$t('sitemap')" />
    </div>
    <Footer />
  </div>
</template>

<script>
import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SubHeaderTitle,
    Footer
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_UNITIES_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setUnities");
      await this.$store.dispatch("setMenus");

      console.log(this.getMenus);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getUnities", "getProjects", "getMenus"]),
    setMenus() {
      let menus = this.getMenus;

      return this.$i18n.locale == "pt" ? menus : menus;
    },
    setAreas() {
      let areasPT = this.getAreasPT;
      let areasEN = this.getAreasEN;

      return this.$i18n.locale == "pt" ? areasPT : areasEN;
    },
    setUnities() {
      let unities = this.getUnities;

      return this.$i18n.locale == "pt" ? unities : unities;
    },
    setCourses() {
      let coursesPT = this.getCoursesPT;
      let coursesEN = this.getCoursesEN;

      return this.$i18n.locale == "pt" ? coursesPT : coursesEN;
    },
    setProjects() {
      let projects = this.getProjects;

      return this.$i18n.locale == "pt" ? projects : projects;
    }
  },
  methods: {
    visitProjectPage(name) {
      this.$store.commit("SET_SELECTED_PROJECT", {
        initials: name
      });

      this.$router.push({
        name: "Project",
        params: { name: name }
      });
    }
  }
};
</script>
