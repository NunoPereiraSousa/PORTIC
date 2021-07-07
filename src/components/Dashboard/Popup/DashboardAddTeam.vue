<template>
  <div class="admin_delete_popup add_team">
    <h2>
      Adicionar um membro de equipa
    </h2>

    <div class="form">
      <label for="fullnameTxt">Nome</label> <br />
      <select v-model="add.permition" id="fullnameTxt">
        <option
          v-for="user in getUsers"
          :key="user.id_user"
          :value="user.id_user"
          >{{ user.full_name }}</option
        >
      </select>
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
        permition: ""
      }
    };
  },
  computed: {
    getUsers() {
      console.log(this.$store.getters.getUsers);
      return this.$store.getters.getUsers;
    }
  },
  methods: {
    async addTeamMember() {
      this.$store.commit("SET_ADD_PROJECT_TEAM_FORM", {
        user_id: this.add.permition,
        can_edit: 1
      });

      try {
        await this.$store.dispatch("setAdminAddProjectTeam");
        await this.$store.dispatch("setAdminProjects");

        if (this.$store.getters.getAddProjectPartnerStatus === 201)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_projects__panel__overlay5");

      let popup = document.querySelector(".add_team");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.add.permition = "";
    },
    notificationSuccess() {
      this.$toast.success("Membro da equipa inserido com sucesso!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    notificationError() {
      this.$toast.error("Oops... erro!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  }
};
</script>
