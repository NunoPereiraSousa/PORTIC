<template>
  <div class="admin_areas__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <span>{{ category }} </span>
      <h2>{{ name }}</h2>
    </div>

    <div class="flex flex-ai-c">
      <button class="admin_areas__panel__grid__card__remove" @click="deleteCon">
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectConnection",
  props: {
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteCon() {
      if (this.category === "Area") {
        this.$store.commit("SET_SELECTED_AP", {
          areaId: this.id,
          projectId: this.$store.getters.getAdminSelectedProjectId
        });

        try {
          await this.$store.dispatch("setAdminDeleteAP");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminProjects");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Unidade") {
        this.$store.commit("SET_SELECTED_PU", {
          projectId: this.$store.getters.getAdminSelectedProjectId,
          unitId: this.id
        });

        try {
          await this.$store.dispatch("setAdminDeletePU");
          await this.$store.dispatch("setAdminProjects");
          await this.$store.dispatch("setAdminUnits");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Curso") {
        this.$store.commit("SET_SELECTED_CP", {
          projectId: this.$store.getters.getAdminSelectedProjectId,
          courseId: this.id
        });

        try {
          await this.$store.dispatch("setAdminDeleteCP");
          await this.$store.dispatch("setAdminCourses");
          await this.$store.dispatch("setAdminProjects");
        } catch (error) {
          return error;
        }
      } else {
        this.$store.commit("SET_SELECTED_PC", {
          projectId: this.$store.getters.getAdminSelectedProjectId,
          careerId: this.id
        });

        try {
          await this.$store.dispatch("setAdminDeletePC");
          await this.$store.dispatch("setAdminCareers");
          await this.$store.dispatch("setAdminProjects");
        } catch (error) {
          return error;
        }
      }
    }
  }
};
</script>
