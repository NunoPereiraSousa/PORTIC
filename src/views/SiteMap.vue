<template>
  <div>
    <div class="site_map">
      <SubHeaderTitle :text="$t('sitemap')" />

      <ul class="site_map_list grid">
        <div>
          <li>
            <router-link :to="{ name: 'Unities' }">
              {{ $t("navbar.items[1]") }}
            </router-link>
            <ul>
              <li v-for="unity in setUnities" :key="unity.id">
                <router-link :to="{ name: 'Unities' }">
                  {{ unity.unityName }}
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'Areas' }">
              {{ $t("navbar.items[2]") }}
            </router-link>
            <ul>
              <li v-for="area in setAreas" :key="area.id">
                <router-link :to="{ name: 'Areas' }">
                  {{ area.areaName }}
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'Courses' }">
              {{ $t("navbar.items[3]") }}
            </router-link>
            <ul>
              <li v-for="course in setCourses" :key="course.id">
                <router-link :to="{ name: 'Courses' }">
                  {{ course.courseName }}
                </router-link>
              </li>
            </ul>
          </li>
        </div>
        <div>
          <li>
            <router-link :to="{ name: 'ProjectsCatalog' }">
              {{ $t("navbar.items[4]") }}
            </router-link>
            <ul>
              <li
                v-for="project in setProjects"
                :key="project.id"
                @click="visitProjectPage(project.initials)"
              >
                {{ project.initials }}
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'Media' }">
              {{ $t("navbar.items[5]") }}
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Positions' }">
              {{ $t("navbar.items[6]") }}
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contacts' }">
              {{ $t("navbar.items[0]") }}
            </router-link>
          </li>
        </div>
      </ul>
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
  computed: {
    ...mapGetters([
      "getAreasPT",
      "getAreasEN",
      "getUnities",
      "getCoursesPT",
      "getCoursesEN",
      "getProjects"
    ]),
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
