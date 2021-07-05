<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__form connections">
        <div>
          <h3 class="dashboard_subheader">
            Conecções área - curso
          </h3>
          <div class="flex">
            <select id="areaCourse" v-model="con.areaCourse">
              <option value="">Selecionar curso</option>
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
            <AreaConnection
              v-for="course in getAreasCourses"
              :key="course.id_course"
              :id="course.id_course"
              category="Curso"
              :name="course.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção área - unidade
          </h3>
          <div class="flex">
            <select id="areaUnit" v-model="con.areaUnit">
              <option value="">Selecionar unidade</option>
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
            <AreaConnection
              v-for="unit in getAreasUnits"
              :key="unit.id_unity"
              :id="unit.id_unity"
              category="Unidade"
              :name="unit.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção área - projeto
          </h3>
          <div class="flex">
            <select id="areaProject" v-model="con.areaProject">
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
            <AreaConnection
              v-for="project in getAreasProjects"
              :key="project.id_project"
              :id="project.id_project"
              category="Projeto"
              :name="project.title"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção área - recrutamento
          </h3>
          <div class="flex">
            <select id="areaCareer" v-model="con.areaCareer">
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
            <AreaConnection
              v-for="career in getAreasCareers"
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
import AreaConnection from "@/components/Dashboard/AreaConnection.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    AreaConnection
  },
  computed: {
    ...mapGetters([
      "getAdminAreas",
      "getAdminSelectedAreaId",
      "getAdminAreaById",
      "getAdminCourses",
      "getAdminCareers",
      "getAdminProjects",
      "getAdminUnits"
    ]),
    getAreasCourses() {
      return this.getAdminAreaById(this.getAdminSelectedAreaId).course_tags;
    },
    getAreasUnits() {
      return this.getAdminAreaById(this.getAdminSelectedAreaId).unity_tags;
    },
    getAreasProjects() {
      return this.getAdminAreaById(this.getAdminSelectedAreaId).project_tags;
    },
    getAreasCareers() {
      console.log(
        this.getAdminAreaById(this.getAdminSelectedAreaId).recruitment_tags
      );
      return this.getAdminAreaById(this.getAdminSelectedAreaId)
        .recruitment_tags;
    }
  },
  data: () => {
    return {
      con: {
        areaCourse: "",
        areaUnit: "",
        areaProject: "",
        areaCareer: ""
      }
    };
  },
  mounted() {
    console.log(this.getAdminAreas);
  },
  methods: {
    async addCourseCon() {
      this.$store.commit("SET_SELECTED_AC", {
        courseId: this.con.areaCourse
      });

      try {
        await this.$store.dispatch("setAdminAC");
        await this.$store.dispatch("setAdminAreas");
      } catch (error) {
        return error;
      }
    },
    async addUnitCon() {
      this.$store.commit("SET_SELECTED_AU", {
        unitId: this.con.areaUnit
      });

      try {
        await this.$store.dispatch("setAdminAU");
        await this.$store.dispatch("setAdminAreas");
      } catch (error) {
        return error;
      }
    },
    async addProjectCon() {
      this.$store.commit("SET_SELECTED_AP", {
        projectId: this.con.areaProject
      });

      console.log(this.con.areaProject);

      try {
        await this.$store.dispatch("setAdminAP");
        await this.$store.dispatch("setAdminAreas");
      } catch (error) {
        return error;
      }
    },
    async addCareerCon() {
      this.$store.commit("SET_SELECTED_ACR", {
        careerId: this.con.areaCareer
      });

      console.log(this.con.areaCareer);

      try {
        await this.$store.dispatch("setAdminACR");
        await this.$store.dispatch("setAdminAreas");
        await this.$store.dispatch("setAdminCareers");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
