<template>
  <div class="admin_focus__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar o fócus <br />
      <span>{{ focusName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm">Confimar</button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardFocusPopup",
  props: {
    focusName: {
      type: String,
      required: false
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
