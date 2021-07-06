<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__form connections">
        <div>
          <h3 class="dashboard_subheader">
            Conecção curso - área
          </h3>
          <div class="flex">
            <select id="courseArea" v-model="con.courseArea">
              <option value="">Selecionar área</option>
              <option
                v-for="area in getAdminAreas"
                :key="area.id_area"
                :value="area.id_area"
                >{{ area.designation_pt }}</option
              >
            </select>

            <button @click="addAreaCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <CourseConnection
              v-for="area in getCoursesAreas"
              :key="area.id_area"
              :id="area.id_area"
              category="Area"
              :name="area.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecções curso - unidade
          </h3>
          <div class="flex">
            <select id="areaCourse" v-model="con.unitCourse">
              <option value="">Selecionar curso</option>
              <option
                v-for="unit in getAdminUnits"
                :key="unit.id_unity"
                :value="unit.id_unity"
                >{{ unit.designation }}</option
              >
            </select>

            <button @click="addUnitCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <CourseConnection
              v-for="unit in getCoursesUnits"
              :key="unit.id_unity"
              :id="unit.id_unity"
              category="Unidade"
              :name="unit.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção curso - projeto
          </h3>
          <div class="flex">
            <select id="areaProject" v-model="con.courseProject">
              <option value="">Selecionar projeto</option>
              <option
                v-for="project in getAdminProjects"
                :key="project.id_project"
                :value="project.id_project"
                >{{ project.initials }}</option
              >
            </select>

            <button @click="addProjectCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <CourseConnection
              v-for="project in getCoursesProjects"
              :key="project.id_project"
              :id="project.id_project"
              category="Projeto"
              :name="project.title"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção curso - recrutamento
          </h3>
          <div class="flex">
            <select id="areaCareer" v-model="con.courseCareer">
              <option value="">Selecionar posição</option>
              <option
                v-for="career in getAdminCareers"
                :key="career.id_available_position"
                :value="career.id_available_position"
                >{{ career.designation_pt }}</option
              >
            </select>

            <button @click="addCareerCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <CourseConnection
              v-for="career in getCoursesCareers"
              :key="career.id_available_position"
              :id="career.id_available_position"
              category="Posições"
              :name="career.designation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import CourseConnection from "@/components/Dashboard/CourseConnection.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    CourseConnection
  },
  computed: {
    ...mapGetters([
      "getAdminAreas",
      "getAdminSelectedCourseId",
      "getAdminCourseById",
      "getAdminCourses",
      "getAdminCareers",
      "getAdminProjects",
      "getAdminUnits"
    ]),
    getCoursesAreas() {
      console.log(this.getAdminCareers);
      return this.getAdminCourseById(this.getAdminSelectedCourseId).area_tags;
    },
    getCoursesUnits() {
      return this.getAdminCourseById(this.getAdminSelectedCourseId).unity_tags;
    },
    getCoursesProjects() {
      console.log(
        this.getAdminCourseById(this.getAdminSelectedCourseId).project_tags
      );
      return this.getAdminCourseById(this.getAdminSelectedCourseId)
        .project_tags;
    },
    getCoursesCareers() {
      return this.getAdminCourseById(this.getAdminSelectedCourseId)
        .recruitment_tags;
    }
  },
  data: () => {
    return {
      con: {
        unitCourse: "",
        courseArea: "",
        courseProject: "",
        courseCareer: ""
      }
    };
  },
  mounted() {
    console.log(this.getAdminAreas);
  },
  methods: {
    async addAreaCon() {
      this.$store.commit("SET_SELECTED_AC", {
        areaId: this.con.courseArea,
        courseId: this.getAdminSelectedCourseId
      });

      try {
        await this.$store.dispatch("setAdminAC");
        await this.$store.dispatch("setAdminAreas");
        await this.$store.dispatch("setAdminCourses");
      } catch (error) {
        return error;
      }
    },
    async addUnitCon() {
      this.$store.commit("SET_SELECTED_UC", {
        courseId: this.getAdminSelectedCourseId,
        unitId: this.con.unitCourse
      });

      try {
        await this.$store.dispatch("setAdminUC");
        await this.$store.dispatch("setAdminCourses");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }
    },
    async addProjectCon() {
      this.$store.commit("SET_SELECTED_CP", {
        projectId: this.con.courseProject,
        courseId: this.getAdminSelectedCourseId
      });

      try {
        await this.$store.dispatch("setAdminCP");
        await this.$store.dispatch("setAdminCourses");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        return error;
      }
    },
    async addCareerCon() {
      this.$store.commit("SET_SELECTED_CCR", {
        careerId: this.con.courseCareer,
        courseId: this.getAdminSelectedCourseId
      });

      console.log(this.con.courseCareer);

      try {
        await this.$store.dispatch("setAdminCCR");
        await this.$store.dispatch("setAdminCareers");
        await this.$store.dispatch("setAdminCourses");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
