<template>
  <div class="admin_focus__popup admin_delete_focus_popup">
    <h2>
      Tem a certeza que pretende eliminar a área <br />
      <span>{{ focusName }}</span>
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
  name: "DashboardDeleteFocusPopup",
  props: {
    focusName: {
      type: String,
      required: false
    }
  },
  methods: {
    async removeArea() {
      try {
        await this.$store.dispatch("setAdminDeleteAreaFocus");
        await this.$store.dispatch("setAdminAreasFocus");
      } catch (error) {
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let admin_about__panel__overlay = document.querySelector(
        ".admin_about__panel__overlay4"
      );

      let admin_delete_popup = document.querySelector(
        ".admin_delete_focus_popup"
      );

      admin_about__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    }
  }
};
</script>
