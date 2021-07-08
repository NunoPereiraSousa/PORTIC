<template>
  <div class="admin_delete_popup add_partner">
    <h2>
      Adicionar um parceiro
    </h2>

    <div class="form">
      <label for="nameTxt">Nome</label> <br />
      <input type="text" id="nameTxt" v-model="add.name" />
      <label class="custom-file-upload" style="margin: 0 auto 2rem;">
        <input type="file" @change="uploadImg" />
        Upload de imagens
      </label>

      {{ imgName }}
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addPartner">
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
  name: "DashboardAddPartner",
  props: {
    areaName: {
      type: String,
      required: false
    }
  },
  data: () => {
    return {
      add: {
        name: "",
        img: ""
      },
      imgName: ""
    };
  },
  methods: {
    async addPartner() {
      this.$store.commit("SET_ADD_PROJECT_PARTNER_FORM", {
        investor: this.add.name,
        file: this.add.img
      });

      try {
        await this.$store.dispatch("setAdminAddProjectPartner");
        await this.$store.dispatch("setAdminProjects");

        if (this.$store.getters.getAddProjectPartnerStatus === 201)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
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
      let overlay = document.querySelector(".admin_projects__panel__overlay4");

      let popup = document.querySelector(".add_partner");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Parceiro inserido com sucesso!", {
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
