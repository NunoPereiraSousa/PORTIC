<template>
  <div class="admin_media__popup admin_add_media_popup">
    <h2>
      Adicionar vídeo
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <input type="text" placeholder="Nome do vídeo" v-model="mediaName" />
      <br />
      <input type="text" placeholder="Url do YouTube" v-model="videoUrl" />
    </div>

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
  name: "DashboardAddMediaPopup",
  data: () => {
    return { mediaName: "", videoUrl: "" };
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay3");
      let popup = document.querySelector(".admin_add_media_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
