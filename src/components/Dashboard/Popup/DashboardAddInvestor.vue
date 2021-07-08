<template>
  <div class="admin_delete_popup add_investor">
    <h2>
      Adicionar um investidor
    </h2>

    <div class="form">
      <label class="custom-file-upload" style="margin: 0 auto 2rem;">
        <input type="file" @change="uploadImg" />
        Upload de imagens
      </label>

      {{ imgName }}
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addInvestor">
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
  name: "DashboardAddInvestor",
  data: () => {
    return {
      add: {
        img: ""
      },
      imgName: ""
    };
  },
  methods: {
    async addInvestor() {
      this.$store.commit("SET_ADD_PROJECT_INVESTOR_FORM", {
        image: this.add.img
      });

      try {
        await this.$store.dispatch("setAdminAddProjectInvestor");
        await this.$store.dispatch("setAdminProjects");

        if (this.$store.getters.getAddProjectInvestorStatus === 201)
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
      let overlay = document.querySelector(".admin_projects__panel__overlay6");

      let popup = document.querySelector(".add_investor");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Investidor inserido com sucesso!", {
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
