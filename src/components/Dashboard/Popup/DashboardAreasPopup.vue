<template>
  <div class="admin_areas__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar a área <br />
      <span>{{ areaName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="removeArea">
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
  name: "DashboardAreasPopup",
  props: {
    areaName: {
      type: String,
      required: false
    }
  },
  methods: {
    async removeArea() {
      try {
        this.$store.dispatch("setAdminDeleteArea");
        this.$store.dispatch("setAdminAreas");
      } catch (error) {
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let admin_areas__panel__overlay = document.querySelector(
        ".admin_areas__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_delete_popup");

      admin_areas__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    }
  }
};
</script>
