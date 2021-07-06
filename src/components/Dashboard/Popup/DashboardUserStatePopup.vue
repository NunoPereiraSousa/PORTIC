<template>
  <div class="admin_delete_popup change_status">
    <h2>
      Escolher o nivel de <span>{{ username }}</span>
    </h2>

    <div class="form">
      <label for="levelTxt">Nível de utilizador</label> <br />
      <select id="levelTxt">
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
      add: {
        name: ""
      }
    };
  },
  methods: {
    async submitLevel() {
      // this.$store.commit("SET_ADD_PROJECT_PARTNER_FORM", {
      //   investor: this.add.name,
      //   file: ""
      // });

      // try {
      //   await this.$store.dispatch("setAdminAddProjectPartner");
      //   await this.$store.dispatch("setAdminProjects");
      // } catch (error) {
      //   console.log(error);
      //   return error;
      // }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_users__panel__overlay2");

      let popup = document.querySelector(".change_status");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
