<template>
  <div class="admin_medias__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar o vídeo <br />
      <span>{{ name }}</span>
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
  name: "DashboardMediaPopup",
  props: {
    name: {
      type: String,
      required: false
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay2");
      let popup = document.querySelector(".admin_medias__popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
