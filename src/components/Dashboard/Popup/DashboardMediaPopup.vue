<template>
  <div class="admin_medias__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar o vídeo <br />
      <span>{{ name }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="deleteMedia">
        Confimar
      </button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DashboardMediaPopup",
  props: {
    name: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters(["getAdminSelectedMediaId", "getAdminMediaById"]),
    mediaName() {
      console.log(this.getAdminSelectedMediaId);
      let id = this.getAdminSelectedMediaId;

      let media = this.getAdminMediaById(id);

      let name;

      if (media) {
        name = media.description_pt;
      }

      return name;
    }
  },
  methods: {
    async deleteMedia() {
      try {
        await this.$store.dispatch("setAdminDeleteMedia");
        await this.$store.dispatch("setAdminMedias");

        if (this.$store.getters.getDeleteMediaStatus === 200)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay2");
      let popup = document.querySelector(".admin_medias__popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Media removida com sucesso!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    notificationError() {
      this.$toast.error("Oops... erro!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  }
};
</script>
