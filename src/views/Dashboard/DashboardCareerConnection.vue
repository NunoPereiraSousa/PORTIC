<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__form connections">
        <div>
          <h3 class="dashboard_subheader">
            Conecção recrutamento - área
          </h3>
          <div class="flex">
            <select id="careerArea" v-model="con.careerArea">
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
            <CareerConnection
              v-for="area in getCareersAreas"
              :key="area.id_area"
              :id="area.id_area"
              category="Area"
              :name="area.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecções recrutamento - unidade
          </h3>
          <div class="flex">
            <select id="areaCourse" v-model="con.careerUnit">
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
            <CareerConnection
              v-for="unit in getCareersUnits"
              :key="unit.id_unity"
              :id="unit.id_unity"
              category="Unidade"
              :name="unit.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção recrutamento - curso
          </h3>
          <div class="flex">
            <select id="areaProject" v-model="con.careerCourse">
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
            <CareerConnection
              v-for="course in getCareerCourses"
              :key="course.id_course"
              :id="course.id_course"
              category="Curso"
              :name="course.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção recrutamento - projeto
          </h3>
          <div class="flex">
            <select id="areaCareer" v-model="con.careerProject">
              <option value="">Selecionar projeto</option>
              <option
                v-for="project in getAdminProjects"
                :key="project.id_project"
                :value="project.id_project"
                >{{ project.initials }}</option
              >
            </select>

            <button @click="addCareerCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <CareerConnection
              v-for="project in getCareersProjects"
              :key="project.id_project"
              :id="project.id_project"
              category="Projeto"
              :name="project.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import CareerConnection from "@/components/Dashboard/CareerConnection.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    CareerConnection
  },
  computed: {
    ...mapGetters([
      "getAdminAreas",
      "getAdminSelectedCareerId",
      "getAdminCareerById",
      "getAdminCourses",
      "getAdminCareers",
      "getAdminProjects",
      "getAdminUnits"
    ]),
    getCareersAreas() {
      console.log(
        this.getAdminCareerById(this.getAdminSelectedCareerId).area_tags
      );
      return this.getAdminCareerById(this.getAdminSelectedCareerId).area_tags;
    },
    getCareersUnits() {
      return this.getAdminCareerById(this.getAdminSelectedCareerId).unity_tags;
    },
    getCareerCourses() {
      return this.getAdminCareerById(this.getAdminSelectedCareerId).course_tags;
    },
    getCareersProjects() {
      console.log(
        this.getAdminCareerById(this.getAdminSelectedCareerId).project_tags
      );
      return this.getAdminCareerById(this.getAdminSelectedCareerId)
        .project_tags;
    }
  },
  data: () => {
    return {
      con: {
        careerUnit: "",
        careerArea: "",
        careerCourse: "",
        careerProject: ""
      }
    };
  },
  methods: {
    async addAreaCon() {
      this.$store.commit("SET_SELECTED_ACR", {
        areaId: this.con.careerArea,
        careerId: this.getAdminSelectedCareerId
      });

      try {
        await this.$store.dispatch("setAdminACR");
        await this.$store.dispatch("setAdminAreas");
        await this.$store.dispatch("setAdminCareers");
      } catch (error) {
        return error;
      }
    },
    async addUnitCon() {
      this.$store.commit("SET_SELECTED_UCR", {
        careerId: this.getAdminSelectedCareerId,
        unitId: this.con.careerUnit
      });

      try {
        await this.$store.dispatch("setAdminUCR");
        await this.$store.dispatch("setAdminCareers");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }
    },
    async addCourseCon() {
      this.$store.commit("SET_SELECTED_CCR", {
        careerId: this.getAdminSelectedCareerId,
        courseId: this.con.careerCourse
      });

      try {
        await this.$store.dispatch("setAdminCCR");
        await this.$store.dispatch("setAdminCareers");
        await this.$store.dispatch("setAdminCourses");
      } catch (error) {
        return error;
      }
    },
    async addCareerCon() {
      this.$store.commit("SET_SELECTED_PC", {
        projectId: this.con.careerProject,
        careerId: this.getAdminSelectedCareerId
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
