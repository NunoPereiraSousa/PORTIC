<template>
  <div>
    <div class="unities_page">
      <div>
        <h1 class="unities_page__title">
          {{ unity.title }}
        </h1>
      </div>
      <h4 class="unities_page__content">
        <div class="unities_page__img" :style="imageStyle"></div>
        {{ unity.content }}
      </h4>
      <div class="connections__info">
        <div v-if="areas.length > 0">
          <u>{{ $t("areas.mainTitle") }}:</u>
          <ul>
            <li v-for="area in areas" :key="area.id_area">
              <router-link :to="{ name: 'Contacts' }">
                {{ area.designation }}
              </router-link>
            </li>
          </ul>
        </div>
        <div v-if="courses.length > 0">
          <u>{{ $t("courses.courseKey") }}:</u>
          <ul>
            <li v-for="course in courses" :key="course.id_course">
              <router-link :to="{ name: 'Courses' }">
                {{ course.designation }}
              </router-link>
            </li>
          </ul>
        </div>
        <div v-if="projects.length > 0">
          <u>{{ $t("projects.title") }}:</u>
          <ul>
            <li
              v-for="project in projects"
              :key="project.id_project"
              @click="openProjectPage(project.title, project.id_project)"
            >
              {{ project.title }}
            </li>
          </ul>
        </div>
        <div v-if="careers.length > 0">
          <u>{{ $t("unities.unitiesKey") }}:</u>
          <ul>
            <li v-for="carrer in careers" :key="carrer.id_available_position">
              <router-link :to="{ name: 'Positions' }">
                {{ career.designation }}
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
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Footer
  },
  data: () => {
    return {
      unity: {
        title: "",
        content: "",
        image: ""
      }
    };
  },
  mounted() {
    console.log(1);
    let unity = this.getUnityById(this.getSelectedUnityId);

    this.unity.title = unity.designation;
    this.unity.content = unity.description;
    this.unity.image = unity.img;
  },
  computed: {
    ...mapGetters([
      "getSelectedUnityId",
      "getUnityById",
      "getAreas",
      "getCourses",
      "getProjects",
      "getCareers"
    ]),
    imageStyle() {
      return `background-image: url('${this.unity.image}')`;
    },
    areas() {
      return this.getAreas;
    },
    careers() {
      return this.getCareers;
    },
    courses() {
      return this.getCourses;
    },
    projects() {
      return this.getProjects;
    }
  },
  methods: {
    openProjectPage(name, id) {
      this.$store.commit("SET_SELECTED_PROJECT_ID", {
        id: id
      });

      this.$router.push({
        name: "Project",
        params: { name: name }
      });
    },
    formatRouterPath(title) {
      return title.replace(/\s/g, "%20");
    }
  }
};
</script>
