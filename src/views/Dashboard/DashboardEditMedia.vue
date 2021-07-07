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
            Vídeo <span>{{ mediaName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editVideo">
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
              placeholder="Nome da área"
              v-model="edit.description_pt"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              URL do vídeo
            </h3>
            <input
              style="width: 20vw;"
              type="url"
              placeholder="Nome do vídeo"
              v-model="edit.youtube_path"
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
              v-model="edit.description_eng"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              Video URL
            </h3>
            <input
              style="width: 20vw;"
              type="url"
              placeholder="Video URL"
              v-model="edit.youtube_path"
            />
          </div>
        </div>
      </form>
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
      edit: {
        title_eng: "",
        title_pt: "",
        description_pt: "",
        description_eng: "",
        appearance_case: "",
        youtube_path: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getAdminSelectedMediaId", "getAdminMediaById"]),
    mediaName() {
      return this.getAdminMediaById(this.getAdminSelectedMediaId)
        .description_pt;
    }
  },
  mounted() {
    // this.mediaName = this.getAdminMediaById(
    //   this.getAdminSelectedMediaId
    // ).description_pt;

    this.description_pt = this.getAdminMediaById(
      this.getAdminSelectedMediaId
    ).description_pt;

    this.description_eng = this.getAdminMediaById(
      this.getAdminSelectedMediaId
    ).description_eng;

    this.appearance_case = this.getAdminMediaById(
      this.getAdminSelectedMediaId
    ).appearance_case;

    this.youtube_path = this.getAdminMediaById(
      this.getAdminSelectedMediaId
    ).youtube_path;

    this.edit.description_pt = this.description_pt;
    this.edit.description_eng = this.description_eng;
    this.edit.youtube_path = this.youtube_path;

    this.edit.title_eng = "Video";
    this.edit.title_pt = "Video";
    this.edit.appearance_case = this.getCurrentLang();
  },
  methods: {
    async editVideo() {
      this.$store.commit("SET_ADMIN_EDIT_MEDIA", {
        title_eng: "Video",
        title_pt: "Video",
        description_pt: this.edit.description_pt,
        description_eng: this.edit.description_eng,
        appearance_case: this.edit.appearance_case,
        youtube_path: this.edit.youtube_path
      });

      console.log(
        this.edit.title_eng,
        this.edit.title_pt,
        this.edit.description_pt,
        this.edit.description_eng,
        this.edit.appearance_case,
        this.edit.youtube_path
      );

      try {
        await this.$store.dispatch("setAdminEditMedia");
        await this.$store.dispatch("setAdminMedias");

        if (this.$store.getters.getEditMediaStatus === 200)
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
