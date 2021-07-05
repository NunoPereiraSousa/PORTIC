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
  name: "AreaConnection",
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
      if (this.category === "Curso") {
        this.$store.commit("SET_SELECTED_AC", {
          courseId: this.id
        });

        try {
          await this.$store.dispatch("setAdminDeleteAC");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminCourses");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Unidade") {
        this.$store.commit("SET_SELECTED_AU", {
          unitId: this.id
        });

        try {
          await this.$store.dispatch("setAdminDeleteAU");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminUnits");
        } catch (error) {
          return error;
        }
      } else if (this.category === "Projeto") {
        this.$store.commit("SET_SELECTED_AP", {
          unitId: this.id
        });

        console.log(this.id);

        try {
          await this.$store.dispatch("setAdminDeleteAP");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminProjects");
        } catch (error) {
          return error;
        }
      } else {
        this.$store.commit("SET_SELECTED_ACR", {
          careerId: this.id
        });

        console.log(this.id);

        try {
          await this.$store.dispatch("setAdminDeleteACR");
          await this.$store.dispatch("setAdminAreas");
          await this.$store.dispatch("setAdminCareers");
        } catch (error) {
          return error;
        }
      }
    }
  }
};
</script>
