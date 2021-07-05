<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__form connections">
        <div>
          <h3 class="dashboard_subheader">
            Conecção projeto - área
          </h3>
          <div class="flex">
            <select id="projectArea" v-model="con.projectArea">
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
            <ProjectConnection
              v-for="area in getProjectsAreas"
              :key="area.id_area"
              :id="area.id_area"
              category="Area"
              :name="area.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecções projeto - unidade
          </h3>
          <div class="flex">
            <select id="areaCourse" v-model="con.projectUnit">
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
            <ProjectConnection
              v-for="unit in getProjectUnits"
              :key="unit.id_unity"
              :id="unit.id_unity"
              category="Unidade"
              :name="unit.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção projeto - curso
          </h3>
          <div class="flex">
            <select id="areaProject" v-model="con.projectCourse">
              <option value="">Selecionar projeto</option>
              <option
                v-for="course in getAdminCourses"
                :key="course.id_course"
                :value="course.id_course"
                >{{ course.designation }}</option
              >
            </select>

            <button @click="addCourseCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <ProjectConnection
              v-for="course in getCoursesProjects"
              :key="course.id_course"
              :id="course.id_course"
              category="Curso"
              :name="course.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção projeto - recrutamento
          </h3>
          <div class="flex">
            <select id="areaCareer" v-model="con.projectCareer">
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
            <ProjectConnection
              v-for="career in getProjectsCareers"
              :key="career.id_available_position"
              :id="career.id_available_position"
              category="Posições"
              :name="career.desigantion"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import ProjectConnection from "@/components/Dashboard/ProjectConnection.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    ProjectConnection
  },
  computed: {
    ...mapGetters([
      "getAdminAreas",
      "getAdminSelectedProjectId",
      "getAdminProjectById",
      "getAdminCourses",
      "getAdminCareers",
      "getAdminProjects",
      "getAdminUnits"
    ]),
    getProjectsAreas() {
      return this.getAdminProjectById(this.getAdminSelectedProjectId).area_tags;
    },
    getProjectUnits() {
      return this.getAdminProjectById(this.getAdminSelectedProjectId)
        .unity_tags;
    },
    getCoursesProjects() {
      return this.getAdminProjectById(this.getAdminSelectedProjectId)
        .course_tags;
    },
    getProjectsCareers() {
      return this.getAdminProjectById(this.getAdminSelectedProjectId)
        .recruitment_tags;
    }
  },
  data: () => {
    return {
      con: {
        projectUnit: "",
        projectArea: "",
        projectCourse: "",
        projectCareer: ""
      }
    };
  },
  methods: {
    async addAreaCon() {
      this.$store.commit("SET_SELECTED_AP", {
        areaId: this.con.projectArea,
        projectId: this.getAdminSelectedProjectId
      });

      try {
        await this.$store.dispatch("setAdminAP");
        await this.$store.dispatch("setAdminAreas");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        return error;
      }
    },
    async addUnitCon() {
      this.$store.commit("SET_SELECTED_PU", {
        projectId: this.getAdminSelectedProjectId,
        unitId: this.con.projectUnit
      });

      try {
        await this.$store.dispatch("setAdminPU");
        await this.$store.dispatch("setAdminProjects");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }
    },
    async addCourseCon() {
      this.$store.commit("SET_SELECTED_CP", {
        projectId: this.getAdminSelectedProjectId,
        courseId: this.con.projectCourse
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
      this.$store.commit("SET_SELECTED_PC", {
        projectId: this.getAdminSelectedProjectId,
        careerId: this.con.projectCareer
      });

      try {
        await this.$store.dispatch("setAdminPC");
        await this.$store.dispatch("setAdminCareers");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
