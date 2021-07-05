<template>
  <div class="admin_areas__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <span>{{ category }} </span>
      <h2>{{ name }}</h2>
    </div>

    <div class="flex flex-ai-c">
      <button
        class="admin_areas__panel__grid__card__remove"
        @click="deleteAreaCon"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnitConnection",
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
    async deleteAreaCon() {
      if (this.category === "Area") {
        this.$store.commit("SET_SELECTED_AU", {
          areaId: this.id,
          unitId: this.$store.getters.getAdminSelectedUnitId
        });

        try {
          await this.$store.dispatch("setAdminDeleteAU");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminUnits");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Curso") {
        this.$store.commit("SET_SELECTED_UC", {
          courseId: this.id,
          unitId: this.$store.getters.getAdminSelectedUnitId
        });

        try {
          await this.$store.dispatch("setAdminDeleteUC");
          await this.$store.dispatch("setAdminCourses");
          await this.$store.dispatch("setAdminUnits");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Projeto") {
        this.$store.commit("SET_SELECTED_PU", {
          projectId: this.id,
          unitId: this.$store.getters.getAdminSelectedUnitId
        });

        try {
          await this.$store.dispatch("setAdminDeletePU");
          await this.$store.dispatch("setAdminProjects");
          await this.$store.dispatch("setAdminUnits");
        } catch (error) {
          return error;
        }
      } else {
        this.$store.commit("SET_SELECTED_UCR", {
          careerId: this.id,
          unitId: this.$store.getters.getAdminSelectedUnitId
        });

        try {
          await this.$store.dispatch("setAdminDeleteUCR");
          await this.$store.dispatch("setAdminCareers");
          await this.$store.dispatch("setAdminUnits");
        } catch (error) {
          return error;
        }
      }
    }
  }
};
</script>
