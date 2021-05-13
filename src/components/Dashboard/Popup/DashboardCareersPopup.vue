<template>
  <div class="admin_careers__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar a carreira <br />
      <span>{{ careerName }}</span>
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
  name: "DashboardCareersPopup",
  props: {
    careerName: {
      type: String,
      required: false
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_careers__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
