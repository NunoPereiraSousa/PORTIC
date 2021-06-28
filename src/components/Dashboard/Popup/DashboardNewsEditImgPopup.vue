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
      <button class="admin_delete_popup__confirm" @click="editImgNews">
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
  name: "DashboardNewsEditImgPopup",
  data() {
    return {
      img: null
    };
  },
  methods: {
    async editImgNews() {
      this.$store.commit("SET_ADMIN_EDIT_NEWS", {
        file: this.img
      });

      try {
        await this.$store.dispatch("setAdminEditNewsImg");
        await this.$store.dispatch("setAdminNews");
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
      let overlay = document.querySelector(".admin_tn__panel__overlay");
      let popup = document.querySelector(".admin_edit_img_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
