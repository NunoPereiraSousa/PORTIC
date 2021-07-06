<template>
  <div class="admin_delete_popup change_status">
    <h2>
      Escolher o nivel de <span>{{ username }}</span>
    </h2>

    <div class="form">
      <label for="levelTxt">Nível de utilizador</label> <br />
      <select id="levelTxt" v-model="edit.user_level">
        <option value="">Escolher nível de utilizador</option>
        <option
          v-for="level in levels"
          :key="level.designation"
          :value="level.designation"
          >{{ level.designation }}</option
        >
      </select>
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="submitLevel">
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
  name: "DashboardUserStatePopup",
  props: {
    username: {
      type: String,
      required: false
    },
    levels: {
      type: Array,
      required: false
    }
  },
  data: () => {
    return {
      edit: {
        user_level: ""
      }
    };
  },
  methods: {
    async submitLevel() {
      this.$store.commit("SET_EDIT_USER_LEVEL", {
        user_level: this.edit.user_level
      });

      try {
        await this.$store.dispatch("setAdminEditUserLevel");
        await this.$store.dispatch("setUsers");

        if (this.$store.getters.getEditUserLevelStatus === 201)
          this.notificationSuccess();
        else this.notificationError();
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_users__panel__overlay2");

      let popup = document.querySelector(".change_status");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Utilizador editado com sucesso!", {
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
