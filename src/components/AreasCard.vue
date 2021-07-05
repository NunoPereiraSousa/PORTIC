<template>
  <div
    class="areas__grid__card"
    :id="card_id"
    @click="expand(index)"
    v-on:click="show = !show"
  >
    <div class="flex flex-ai-c flex-jc-sb ">
      <h2 class="areas__grid__card__title">
        {{ areaName }}
      </h2>
      <button class="areas__grid__card__button" :id="button_id">
        <div class="areas__grid__card__button__lines"></div>
        <div class="areas__grid__card__button__lines"></div>
      </button>
    </div>
    <div class=" areas__grid__card__toggle collapse">
      <p class="areas__grid__card__content">
        {{ areaDesc }}
      </p>
      <div class="connections__info">
        <div v-if="careers.length > 0">
          <u>{{ $t("careers.careersKey") }}:</u>
          <ul>
            <li v-for="career in careers" :key="career.id_available_position">
              <router-link :to="{ name: 'Positions' }">
                {{ career.designation }}
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
        <div v-if="units.length > 0">
          <u>{{ $t("unities.unitiesKey") }}:</u>
          <ul>
            <li
              v-for="unit in units"
              :key="unit.id_unity"
              @click="getUnityId(unit.id_unity, unit.designation)"
            >
              {{ unit.designation }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AreasCard",
  props: {
    areaName: {
      type: String,
      required: true
    },
    button_id: {
      type: String,
      required: true
    },
    areaDesc: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    card_id: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    careers: {
      type: Array,
      required: false
    },
    courses: {
      type: Array,
      required: false
    },
    projects: {
      type: Array,
      required: false
    },
    units: {
      type: Array,
      required: false
    }
  },
  data: () => {
    return {
      show: false
    };
  },
  mounted() {
    console.log(this.courses);
  },
  computed: {
    ...mapGetters(["getAreas"])
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
    },
    getUnityId(id, title) {
      this.$store.commit("SET_SELECTED_UNITY_ID", { id: id });

      let formatedTitle = this.formatRouterPath(title);

      if (this.$route.path != `/unities/${formatedTitle}`) {
        this.$router.push({
          name: "UnitiesPage",
          params: { name: title }
        });
      }
    },
    expand(index) {
      this.selectedItem = index;

      //   let card = document.querySelector(`#card_${index}`);

      let lines = document.querySelectorAll(
        `#card_${index} .areas__grid__card__button__lines`
      );

      lines.forEach(line => {
        line.classList.toggle("minus");
      });

      let card = document.querySelector(`#card_${index}`);

      let card__toggle = document.querySelector(
        `#card_${index} .areas__grid__card__toggle`
      );

      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        card__toggle.style.display = "block";

        let height = card__toggle.clientHeight;

        console.log(height);

        setTimeout(() => {
          card__toggle.style.height = `${height + 32}px`;
          card__toggle.style.paddingTop = `32px`;
          card__toggle.style.display = "";
        }, 1);

        card__toggle.classList =
          "areas__grid__card__content areas__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.classList =
            "areas__grid__card__content areas__grid__card__toggle open";
        }, 300);
      } else {
        card__toggle.classList =
          "areas__grid__card__content areas__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.style.height = "0px";
          card__toggle.style.paddingTop = `0px`;
        }, 1);

        setTimeout(() => {
          card__toggle.classList =
            "areas__grid__card__content areas__grid__card__toggle collapse";
          card__toggle.style.height = "";
          card__toggle.style.paddingTop = "";
        }, 300);
      }
    }
  }
};
</script>
