<template>
  <div>
    <div class="site_map grid">
      <div>
        <SubHeaderTitle :text="$t('sitemap')" />

        <div class="site_map_list flex flex-fd-c">
          <ul>
            <li v-for="menu in setMenus" :key="menu.id_menu">
              <router-link :to="{ name: menu.router_link }">
                {{ menu.menu_designation }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubHeaderTitle :text="$t('areas.mainTitle')" />

        <div class="site_map_list flex flex-fd-c">
          <ul>
            <li v-for="area in setAreas" :key="area.id_area">
              <router-link :to="{ name: 'Contacts' }">
                {{ area.designation }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubHeaderTitle :text="$t('courses.courseKey')" />

        <div class="site_map_list flex flex-fd-c">
          <ul>
            <li v-for="course in setCourses" :key="course.id_course">
              <router-link :to="{ name: 'Courses' }">
                {{ course.designation }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubHeaderTitle :text="$t('medias.video')" />

        <div class="site_map_list flex flex-fd-c">
          <ul>
            <li v-for="media in setMedias" :key="media.id_media">
              <router-link :to="{ name: 'Media' }">
                {{ media.description }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubHeaderTitle :text="$t('projects.title')" />

        <div class="site_map_list flex flex-fd-c">
          <ul>
            <li
              v-for="project in setProjects"
              :key="project.id_project"
              @click="visitProjectPage(project.id_project, project.title)"
            >
              <p>
                {{ project.initials }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubHeaderTitle :text="$t('unities.unitiesKey')" />

        <div class="site_map_list flex flex-fd-c">
          <ul>
            <li v-for="unit in setUnits" :key="unit.id_unit">
              <router-link :to="{ name: 'Unities' }">
                {{ unit.designation }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
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
    this.$store.commit("SET_SELECTED_AREAS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });
    this.$store.commit("SET_SELECTED_COURSES_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });
    this.$store.commit("SET_SELECTED_MEDIAS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });
    this.$store.commit("SET_SELECTED_PROJECTS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });
    this.$store.commit("SET_SELECTED_UNITIES_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setAreas");
      await this.$store.dispatch("setCourses");
      await this.$store.dispatch("setMedias");
      await this.$store.dispatch("setMenus");
      await this.$store.dispatch("setProjects");
      await this.$store.dispatch("setUnities");
    } catch (error) {
      return error;
    }
  },
  computed: {
    ...mapGetters([
      "getAreas",
      "getCourses",
      "getMedias",
      "getMenus",
      "getProjects",
      "getUnities"
    ]),
    setMenus() {
      let menus = this.getMenus;

      return this.$i18n.locale == "pt" ? menus : menus;
    },
    setAreas() {
      return this.getAreas;
    },
    setCourses() {
      return this.getCourses;
    },
    setMedias() {
      return this.getMedias;
    },
    setProjects() {
      return this.getProjects;
    },
    setUnits() {
      return this.getUnities;
    }
  },
  methods: {
    visitProjectPage(id, name) {
      this.$store.commit("SET_SELECTED_PROJECT_ID", {
        id: id
      });

      this.$router.push({
        name: "Project",
        params: { id: name }
      });
    }
  }
};
</script>
