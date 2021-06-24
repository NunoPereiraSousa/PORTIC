<template>
  <div class="admin_focus__popup admin_edit_img_focus_popup">
    <h2>
      Alterar imagem
    </h2>

    <label class="custom-file-upload" style="margin: 0rem auto 4rem;">
      <input type="file" @change="uploadImage" />
      Upload da imagem
    </label>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="editImgFocus">
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
  name: "DashboardFocusImgPopup",
  data() {
    return {
      img: null
    };
  },
  methods: {
    async editImgFocus() {
      this.$store.commit("SET_ADMIN_EDIT_IMG_AREA_FOCUS_FORM", {
        file: this.img
      });

      try {
        await this.$store.dispatch("setAdminEditAreaFocusImg");
        await this.$store.dispatch("setAdminAreasFocus");
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.img = image;
    },
    closePopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay5");
      let popup = document.querySelector(".admin_edit_img_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    resetForm() {
      this.add.file = "";
      this.add.namePt = "";
      this.add.nameEn = "";
    }
  }
};
</script>
