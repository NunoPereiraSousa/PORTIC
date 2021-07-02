<template>
  <div class="admin_focus__popup admin_add_focus_popup editImg">
    <h2>
      Adicionar imagem
    </h2>

    <div class="form">
      <label class="custom-file-upload" style="margin: 0 auto 2rem;">
        <input type="file" @change="uploadImg" />
        Upload de imagens
      </label>

      {{ imgName }}
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addImg">
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
  name: "DashboardAddImgPopup",
  data() {
    return {
      add: {
        img: null
      },
      imgName: ""
    };
  },
  methods: {
    async addImg() {
      this.$store.commit("SET_PROJECTS_ADD_FORM", {
        gallery_imgs: this.add.img
      });

      console.log(this.add.img);

      try {
        this.$store.dispatch("setAdminAddProjectImg");
      } catch (error) {
        return error;
      }

      this.closePopup();
    },
    uploadImg(e) {
      const img = e.target.files[0];
      this.add.img = img;

      this.imgName = img.name;
    },
    closePopup() {
      let overlay = document.querySelector(".admin_projects__panel__overlay2");
      let popup = document.querySelector(".editImg");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
