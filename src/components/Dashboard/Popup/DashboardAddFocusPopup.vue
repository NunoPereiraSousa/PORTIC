<template>
  <div class="admin_focus__popup admin_add_focus_popup">
    <h2>
      Adicionar um novo focus
    </h2>

    <div class="form">
      <label for="namePtTxt">Nome</label><br />
      <input type="text" id="namePtTxt" v-model="add.namePt" />

      <label for="image">Imagem</label><br />
      <label
        class="custom-file-upload"
        style="margin-bottom: 0; margin-top: 1rem"
      >
        <input type="file" @change="uploadImage" />
        Upload de imagens
      </label>
      <br />
      <br />
      <label for="nameEnTxt">Name</label><br />
      <input type="text" id="nameEnTxt" v-model="add.nameEn" />
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addFocus">
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
  name: "DashboardAddFocusPopup",
  data() {
    return {
      add: {
        namePt: "",
        nameEn: "",
        file: null
      }
    };
  },
  methods: {
    async addFocus() {
      this.$store.commit("SET_ADMIN_ADD_AREA_FOCUS_FORM", {
        file: this.add.file,
        description_pt: this.add.namePt,
        description_eng: this.add.nameEn
      });

      try {
        await this.$store.dispatch("setAdminAddAreasFocus");
        await this.$store.dispatch("setAdminAreasFocus");
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
      this.resetForm();
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.add.file = image;

      // const reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = e => {
      //   this.add.file = e.target.result;
      // };
    },
    closePopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay2");
      let popup = document.querySelector(".admin_add_focus_popup");

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
