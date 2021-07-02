<template>
  <div class="admin_projects__panel__grid__card flex flex-ai-c flex-jc-sb">
    <h2>
      {{ projectName }}
    </h2>
    <div class="flex flex-ai-c">
      <button
        class="admin_projects__panel__grid__card__block"
        @click="showPopup5(id)"
      >
        Adicionar equipa
      </button>
      <button
        class="admin_projects__panel__grid__card__block"
        @click="openAddNewsPage(id)"
      >
        Adicionar notícia
      </button>
      <button
        class="admin_projects__panel__grid__card__block"
        @click="showPopup3(id)"
      >
        Adicionar parceiro
      </button>
      <button
        class="admin_projects__panel__grid__card__block"
        @click="showPopup2(id)"
      >
        Adicionar imagem
      </button>
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
    id: {
      type: String,
      required: false
    }
  },
  computed: {
    // ...mapGetters(["getSelectedCourseByID", "getCourseByID"])
  },
  methods: {
    openPage(projectId, projectName) {
      this.$store.commit("SET_SELECTED_ADMIN_PROJECTS_ID", {
        id: projectId
      });

      this.$router.push({
        name: "DashboardEditProjects",
        params: { name: projectName }
      });
    },
    showPopup(projectId) {
      let overlay = document.querySelector(".admin_projects__panel__overlay");
      let popup = document.querySelector(".editImg");
      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC
      this.$store.commit("SET_SELECTED_ADMIN_PROJECTS_ID", {
        id: projectId
      });
    },
    showPopup2(projectId) {
      let overlay = document.querySelector(".admin_projects__panel__overlay2");
      let popup = document.querySelector(".editImg");
      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC
      this.$store.commit("SET_SELECTED_ADMIN_PROJECTS_ID", {
        id: projectId
      });
    },
    showPopup3(projectId) {
      let overlay = document.querySelector(".admin_projects__panel__overlay4");

      let popup = document.querySelector(".add_partner");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC
      this.$store.commit("SET_SELECTED_ADMIN_PROJECTS_ID", {
        id: projectId
      });
    },
    openAddNewsPage(id) {
      console.log(id);

      this.$store.commit("SET_SELECTED_ADMIN_PROJECTS_ID", {
        id: id
      });

      this.$router.push({
        name: "DashboardAddProjectNews"
      });
    },
    showPopup5(id) {
      let overlay = document.querySelector(".admin_projects__panel__overlay5");

      let popup = document.querySelector(".add_team");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_SELECTED_ADMIN_PROJECTS_ID", {
        id: id
      });
    }
  }
};
</script>
