<template>
  <div class="admin_delete_popup add_team">
    <h2>
      Adicionar um parceiro
    </h2>

    <div class="form">
      <label for="fullnameTxt">Nome</label> <br />
      <input type="text" id="fullnameTxt" v-model="add.name" />
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addTeamMember">
        Confimar
      </button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAddTeam",
  data: () => {
    return {
      add: {
        name: ""
      }
    };
  },
  methods: {
    async addTeamMember() {
      this.$store.commit("SET_ADD_PROJECT_TEAM_FORM", {
        name: this.add.name,
        can_edit: true
      });

      try {
        await this.$store.dispatch("setAdminAddProjectTeam");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_projects__panel__overlay5");

      let popup = document.querySelector(".add_team");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
