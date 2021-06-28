<template>
  <div class="admin_tn__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar a notícia <br />
      <span>{{ newsName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="removeNews">
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
  name: "DashboardNewsPopup",
  props: {
    newsName: {
      type: String,
      required: false
    }
  },
  methods: {
    async removeNews() {
      try {
        await this.$store.dispatch("setAdminDeleteNews");
        await this.$store.dispatch("setAdminNews");
      } catch (error) {
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_tn__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
