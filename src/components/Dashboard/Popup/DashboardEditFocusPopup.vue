<template>
  <div class="admin_focus__popup admin_edit_focus_popup">
    <h2>
      Editar o focus <br />
      {{ focusName }}
    </h2>

    <div class="form">
      <label for="namePtTxt">Nome</label><br />
      <input
        type="text"
        id="namePtTxt"
        :placeholder="focusName"
        v-model="edit.namePt"
      />
      <br />
      <br />
      <label for="nameEnTxt">Nome</label><br />
      <input
        type="text"
        id="nameEnTxt"
        :placeholder="focusNameEn"
        v-model="edit.nameEn"
      />
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="editFocus">
        Confimar
      </button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DashboardEditFocusPopup",
  props: {
    focusName: {
      type: String,
      required: false
    },
    focusNameEn: {
      type: String,
      required: false
    }
  },
  data: () => {
    return {
      edit: {
        namePt: "",
        nameEn: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getAdminAreaFocusByName"])
  },
  methods: {
    async editFocus() {
      this.$store.commit("SET_ADMIN_EDIT_AREA_FOCUS", {
        description_pt: this.edit.namePt,
        description_eng: this.edit.nameEn
      });

      try {
        await this.$store.dispatch("setAdminEditAreasFocus");
        await this.$store.dispatch("setAdminAreasFocus");
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    closePopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay3");
      let popup = document.querySelector(".admin_edit_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
