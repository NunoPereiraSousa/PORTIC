<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div
          class="admin_actions_panel__header__languages flex flex-jc-sb flex-ai-c"
        >
          Portugues / Inglês
        </div>
        <div>
          <h3>
            Adicionar Vídeo
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addVideo">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <form
        class="admin_actions_panel__form admin_actions_panel__unities__form"
      >
        <div class="flex flex-ai-c" style="column-gap: 3rem">
          <div>
            <h3 class="dashboard_subheader">
              Título do vídeo
            </h3>
            <input
              style="width: 30vw;"
              type="text"
              placeholder="Nome do media"
              v-model="add.description_pt"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              URL do vídeo
            </h3>
            <input
              style="width: 20vw;"
              type="text"
              placeholder="Nome do vídeo"
              v-model="add.youtube_path"
            />
          </div>
        </div>

        <div class="flex flex-ai-c" style="column-gap: 3rem">
          <div>
            <h3 class="dashboard_subheader">
              Video title
            </h3>
            <input
              style="width: 30vw;"
              type="text"
              placeholder="Video title"
              v-model="add.description_eng"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              Video URL
            </h3>
            <input
              style="width: 20vw;"
              type="text"
              placeholder="Video URL"
              v-model="add.youtube_path"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";

export default {
  components: {
    DashboardHeader
  },
  data: () => {
    return {
      add: {
        title_eng: "",
        title_pt: "",
        description_pt: "",
        description_eng: "",
        appearance_case: "",
        youtube_path: ""
      }
    };
  },
  mounted() {
    this.add.title_eng = "Video";
    this.add.title_pt = "Video";
    this.add.appearance_case = this.getCurrentLang();
  },
  methods: {
    async addVideo() {
      this.$store.commit("SET_ADMIN_ADD_MEDIA", {
        title_eng: "Video",
        title_pt: "Video",
        description_pt: this.add.description_pt,
        description_eng: this.add.description_eng,
        appearance_case: this.add.appearance_case,
        youtube_path: this.add.youtube_path
      });

      console.log(
        this.add.title_eng,
        this.add.title_pt,
        this.add.description_pt,
        this.add.description_eng,
        this.add.appearance_case,
        this.add.youtube_path
      );

      try {
        await this.$store.dispatch("setAdminAddMedia");
        await this.$store.dispatch("setAdminMedias");

        if (this.$store.getters.getAddMediaStatus === 201)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.goBack();
    },
    getCurrentLang() {
      let lang = JSON.parse(localStorage.getItem("vuex")).langModule.lang;

      return lang === "pt" ? 1 : 2;
    },
    goBack() {
      this.$router.push({
        name: "DashboardMedia"
      });
    },
    notificationSuccess() {
      this.$toast.success("Media inserida com sucesso!", {
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
