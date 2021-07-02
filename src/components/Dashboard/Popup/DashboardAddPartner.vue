<template>
  <div class="admin_delete_popup add_partner">
    <h2>
      Adicionar um parceiro
    </h2>

    <div class="form">
      <label for="nameTxt">Nome</label> <br />
      <input type="text" id="nameTxt" v-model="add.name" />
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addPartner">
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
  name: "DashboardAddPartner",
  props: {
    areaName: {
      type: String,
      required: false
    }
  },
  data: () => {
    return {
      add: {
        name: ""
      }
    };
  },
  methods: {
    async addPartner() {
      this.$store.commit("SET_ADD_PROJECT_PARTNER_FORM", {
        investor: this.add.name,
        file: ""
      });

      try {
        await this.$store.dispatch("setAdminAddProjectPartner");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_projects__panel__overlay4");

      let popup = document.querySelector(".add_partner");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
