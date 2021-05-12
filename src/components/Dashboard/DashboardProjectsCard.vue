<template>
  <div class="admin_projects__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Projeto 0{{ counter }}</h5>
      <h5 v-else>Projeto {{ counter }}</h5>
      <h2>
        {{ projectName }}
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_projects__panel__grid__card__edit"
        @click="openPage(id, projectName)"
      >
        Editar
      </button>
      <button
        class="admin_projects__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "DashboardProjectsCard",
  props: {
    projectName: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: false
    }
  },
  computed: {
    // ...mapGetters(["getSelectedCourseByID", "getCourseByID"])
  },
  methods: {
    openPage(projectId, projectName) {
      this.$store.commit("SET_SELECTED_PROJECT_ID", {
        id: projectId
      });

      this.$router.push({
        name: "DashboardEditProjects",
        params: { name: projectName }
      });
    },
    showPopup(projectId) {
      let overlay = document.querySelector(".admin_projects__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");
      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC
      this.$store.commit("SET_SELECTED_PROJECT_ID", {
        id: projectId
      });
    }
  }
};
</script>
