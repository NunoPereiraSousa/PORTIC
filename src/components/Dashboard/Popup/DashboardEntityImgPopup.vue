<template>
  <div class="admin_focus__popup entity_img_popup editImg">
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
      <button class="admin_delete_popup__confirm" @click="editImg">
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
  name: "DashboardEntityImgPopup",
  data() {
    return {
      edit: {
        img: null
      },
      imgName: ""
    };
  },
  methods: {
    async editImg() {
      this.$store.commit("SET_EDIT_ENTITY_FORM", {
        file: this.edit.img
      });

      try {
        await this.$store.dispatch("setAdminEditEntityImg");
        await this.$store.dispatch("setAdminEntities");

        // if (this.$store.getters.getAddProjectImgStatus === 201)
        //   this.notificationSuccess();
      } catch (error) {
        // this.notificationError();
        return error;
      }

      this.closePopup();
    },
    uploadImg(e) {
      const img = e.target.files[0];
      this.edit.img = img;

      this.imgName = img.name;
    },
    closePopup() {
      let admin_entities__panel__overlay = document.querySelector(
        ".admin__entities__panel__overlay2"
      );

      let admin_delete_popup = document.querySelector(".entity_img_popup");

      admin_entities__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Imagem inserida com sucesso!", {
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
