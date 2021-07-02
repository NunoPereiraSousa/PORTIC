<template>
  <div class="admin_careers__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar a carreira <br />
      <span>{{ careerName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="deleteCareer">
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
  name: "DashboardCareersPopup",
  props: {
    careerName: {
      type: String,
      required: false
    }
  },
  methods: {
    async deleteCareer() {
      try {
        this.$store.dispatch("setAdminDeleteCareer");
        this.$store.dispatch("setAdminCareers");

        this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_careers__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Posição removida com sucesso!", {
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
