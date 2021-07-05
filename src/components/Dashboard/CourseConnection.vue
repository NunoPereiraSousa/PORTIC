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
  name: "CourseConnection",
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
        this.$store.commit("SET_SELECTED_AC", {
          areaId: this.id,
          courseId: this.$store.getters.getAdminSelectedCourseId
        });

        try {
          await this.$store.dispatch("setAdminDeleteAC");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminCourses");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Unidade") {
        this.$store.commit("SET_SELECTED_UC", {
          courseId: this.$store.getters.getAdminSelectedCourseId,
          unitId: this.id
        });

        try {
          await this.$store.dispatch("setAdminDeleteUC");
          await this.$store.dispatch("setAdminCourses");
          await this.$store.dispatch("setAdminCourses");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Projeto") {
        this.$store.commit("SET_SELECTED_CP", {
          projectId: this.id,
          courseId: this.$store.getters.getAdminSelectedCourseId
        });

        try {
          await this.$store.dispatch("setAdminDeleteCP");
          await this.$store.dispatch("setAdminCourses");
          await this.$store.dispatch("setAdminProjects");
        } catch (error) {
          return error;
        }
      } else {
        this.$store.commit("SET_SELECTED_CCR", {
          careerId: this.id,
          courseId: this.$store.getters.getAdminSelectedCourseId
        });

        try {
          await this.$store.dispatch("setAdminDeleteCCR");
          await this.$store.dispatch("setAdminCareers");
          await this.$store.dispatch("setAdminCourses");
        } catch (error) {
          return error;
        }
      }
    }
  }
};
</script>
