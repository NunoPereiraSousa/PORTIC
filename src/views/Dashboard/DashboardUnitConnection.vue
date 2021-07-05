<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__form connections">
        <div>
          <h3 class="dashboard_subheader">
            Conecção unidade - área
          </h3>
          <div class="flex">
            <select id="areaUnit" v-model="con.areaUnit">
              <option value="">Selecionar área</option>
              <option
                v-for="area in getAdminAreas"
                :key="area.id_area"
                :value="area.id_area"
                >{{ area.designation_pt }} - {{ area.id_area }}</option
              >
            </select>

            <button @click="addAreaCon">Guardar</button>
          </div>

          <div class="connections__grid grid">
            <UnitConnection
              v-for="area in getUnitsAreas"
              :key="area.id_area"
              :id="area.id_area"
              category="Area"
              :name="area.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecções unidade - curso
          </h3>
          <div class="flex">
            <select id="areaCourse" v-model="con.unitCourse">
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
            <UnitConnection
              v-for="course in getUnitsCourses"
              :key="course.id_course"
              :id="course.id_course"
              category="Curso"
              :name="course.designation"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção unidade - projeto
          </h3>
          <div class="flex">
            <select id="areaProject" v-model="con.unitProject">
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
            <UnitConnection
              v-for="project in getUnitsProjects"
              :key="project.id_project"
              :id="project.id_project"
              category="Projeto"
              :name="project.title"
            />
          </div>
        </div>

        <div>
          <h3 class="dashboard_subheader">
            Conecção unidade - recrutamento
          </h3>
          <div class="flex">
            <select id="areaCareer" v-model="con.unitCareer">
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
            <UnitConnection
              v-for="career in getUnitsCareers"
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
import UnitConnection from "@/components/Dashboard/UnitConnection.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    UnitConnection
  },
  computed: {
    ...mapGetters([
      "getAdminAreas",
      "getAdminSelectedUnitId",
      "getAdminUnitById",
      "getAdminCourses",
      "getAdminCareers",
      "getAdminProjects",
      "getAdminUnits"
    ]),
    getUnitsAreas() {
      return this.getAdminUnitById(this.getAdminSelectedUnitId).area_tags;
    },
    getUnitsCourses() {
      return this.getAdminUnitById(this.getAdminSelectedUnitId).course_tags;
    },
    getUnitsProjects() {
      return this.getAdminUnitById(this.getAdminSelectedUnitId).project_tags;
    },
    getUnitsCareers() {
      return this.getAdminUnitById(this.getAdminSelectedUnitId)
        .recruitment_tags;
    }
  },
  data: () => {
    return {
      con: {
        unitCourse: "",
        areaUnit: "",
        unitProject: "",
        unitCareer: ""
      }
    };
  },
  mounted() {
    console.log(this.getAdminAreas);
  },
  methods: {
    async addAreaCon() {
      this.$store.commit("SET_SELECTED_AU", {
        areaId: this.con.areaUnit,
        unitId: this.getAdminSelectedUnitId
      });

      try {
        await this.$store.dispatch("setAdminAU");
        await this.$store.dispatch("setAdminAreas");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }
    },
    async addCourseCon() {
      this.$store.commit("SET_SELECTED_UC", {
        courseId: this.con.unitCourse,
        unitId: this.getAdminSelectedUnitId
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
      this.$store.commit("SET_SELECTED_PU", {
        projectId: this.con.unitProject,
        unitId: this.getAdminSelectedUnitId
      });

      try {
        await this.$store.dispatch("setAdminPU");
        await this.$store.dispatch("setAdminProjects");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }
    },
    async addCareerCon() {
      this.$store.commit("SET_SELECTED_UCR", {
        careerId: this.con.unitCareer,
        unitId: this.getAdminSelectedUnitId
      });

      console.log(this.con.unitCareer);

      try {
        await this.$store.dispatch("setAdminUCR");
        await this.$store.dispatch("setAdminCareers");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
