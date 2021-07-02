<template>
  <div class="admin_delete_popup delete_img">
    <h2>
      Tem a certeza que pretende eliminar a Imagem?
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="removeImg">
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
  name: "DashboardDeleteImgPopup",
  props: {
    areaName: {
      type: String,
      required: false
    }
  },
  methods: {
    async removeImg() {
      try {
        await this.$store.dispatch("setAdminDeleteProjectImg");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_projects__panel__overlay3");

      let popup = document.querySelector(".delete_img");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
