<template>
  <div class="admin_delete_popup edit_entity_popup">
    <h2>
      Escolher o nivel de <span>{{ username }}</span>
    </h2>

    <div class="form">
      <label for="levelTxt">Nível de utilizador</label> <br />
      <select id="levelTxt" v-model="edit.entity_initials">
        <option value="">Escolher entidade</option>
        <option
          v-for="initials in initials"
          :key="initials"
          :value="initials"
          >{{ initials }}</option
        >
      </select>
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="editUserEntity">
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
  name: "DashboardEditUserEntity",
  props: {
    username: {
      type: String,
      required: false
    },
    initials: {
      type: Object,
      required: false
    }
  },
  data: () => {
    return {
      edit: {
        entity_initials: ""
      }
    };
  },
  methods: {
    async editUserEntity() {
      this.$store.commit("SET_NEW_USER_ENTITY", {
        entity: this.edit.entity_initials
      });

      try {
        await this.$store.dispatch("setNewUserEntity");
        await this.$store.dispatch("setUsers");

        if (this.$store.getters.getNewUserEntityStatus === 201)
          this.notificationSuccess();
        else this.notificationError();
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_users__panel__overlay3");

      let popup = document.querySelector(".edit_entity_popup");

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
