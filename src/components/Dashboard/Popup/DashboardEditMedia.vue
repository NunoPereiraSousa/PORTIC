<template>
  <div class="admin_users__popup admin_delete_popup admin_edit_popup">
    <h2>
      Editar vídeo
      <span>{{ mediaName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <input type="text" :placeholder="mediaName" v-model="edit.mediaName" />
      <br />
      <input type="text" :placeholder="videoUrl" v-model="edit.videoUrl" />
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
  name: "DashboardEditMedia",
  props: {
    mediaName: {
      type: String,
      required: false
    },
    videoUrl: {
      type: String,
      required: false
    }
  },
  data: () => {
    return {
      edit: {
        mediaName: "",
        videoUrl: ""
      }
    };
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
