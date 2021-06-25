<template>
  <div class="admin_unities__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar a unidade <br />
      <span>{{ unityName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="deleteUnit">
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
  name: "DashboardUnitiesPopup",
  props: {
    unityName: {
      type: String,
      required: false
    }
  },
  methods: {
    async deleteUnit() {
      try {
        await this.$store.dispatch("setAdminDeleteUnit");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_unities__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
