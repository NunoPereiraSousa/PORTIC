<template>
  <div class="admin_actions admin_projects_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel projects_panel">
      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <p>Português</p>
        <div>
          <h3>
            Utilizador <span>{{ userFullName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editUser">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form projects_panel__form">
        <h3 class="dashboard_subheader">
          Informação genérica
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="usernameTxt">Username</label><br />
            <input
              id="usernameTxt"
              type="text"
              placeholder="Username"
              v-model="edit.username"
            />
          </div>
          <div>
            <label for="initialsTxt">Nome e sobrenome</label><br />
            <input
              id="initialsTxt"
              type="text"
              placeholder="Nome e sobrenome"
              v-model="edit.fullName"
            />
          </div>
          <div>
            <label for="numberTxt">Contacto telefónico</label><br />
            <input
              id="numberTxt"
              type="number"
              max="9"
              placeholder="Contacto telefónico"
              v-model="edit.number"
            />
          </div>
          <div>
            <label for="emailTxt">E-mail</label><br />
            <input
              id="emailTxt"
              type="email"
              placeholder="E-mail"
              v-model="edit.email"
            />
          </div>
          <div>
            <label for="roleTxt">Cargo</label><br />
            <input
              type="text"
              id="roleTxt"
              placeholder="Cargo atual"
              v-model="edit.role"
            />
          </div>
          <div>
            <label for="socialTxt">URL LinkedIn</label><br />
            <input
              id="socialTxt"
              type="text"
              placeholder="URL LinkedIn"
              v-model="edit.linkedIn"
            />
          </div>
        </div>

        <div class="flex" style="column-gap: 4rem;">
          <div>
            <h3 class="dashboard_subheader">
              Biografia/ descrição de perfil
            </h3>

            <textarea
              cols="30"
              rows="6"
              placeholder="Biografia/ descrição de perfil"
              v-model="edit.descPt"
            ></textarea>
          </div>
          <div>
            <h3 class="dashboard_subheader">
              Biography/ profile description
            </h3>

            <textarea
              cols="30"
              rows="6"
              placeholder="Biography/ profile description"
              v-model="edit.descEn"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader
  },
  data: () => {
    return {
      userFullName: "",
      edit: {
        username: "",
        fullName: "",
        number: "",
        email: "",
        role: "",
        linkedIn: "",
        descPt: "",
        descEn: ""
      }
    };
  },
  created() {
    this.user = this.getAdminUserById(this.getAdminSelectedUserId);

    this.userFullName = this.user.full_name;

    this.edit = {
      username: this.user.username,
      fullName: this.user.full_name,
      number: this.user.phone_numb,
      email: this.user.email,
      role: this.user.post,
      linkedIn: this.user.linkedIn_url,
      descPt: this.user.description_pt,
      descEn: this.user.description_eng
    };
  },
  computed: {
    ...mapGetters([
      "getAdminUserById",
      "getAdminSelectedUserId",
      "getEditProfileStatus2"
    ])
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "DashboardUsers"
      });
    },
    async editUser() {
      this.$store.commit("SET_EDIT_PROFILE_FORM", {
        username: this.edit.username,
        description_pt: this.edit.descPt,
        description_eng: this.edit.descEn,
        email: this.edit.email,
        phone_numb: this.edit.number,
        linkedIn_url: this.edit.linkedIn,
        fullName: this.edit.fullName,
        post: this.edit.role
      });

      try {
        await this.$store.dispatch("setAdminEditProfile");
        await this.$store.dispatch("setUsers");

        if (this.getEditProfileStatus2 === 200) this.notificationSuccess();
        else this.notificationError();
      } catch (error) {
        return error;
      }

      this.goBack();
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
