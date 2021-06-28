<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel" v-show="currentTab === 0">
      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div
          class="admin_actions_panel__header__languages flex flex-jc-sb flex-ai-c"
        >
          <button
            v-for="(tab, index) in tabs"
            :key="tab"
            @click="currentTab = index"
            :class="{ active: currentTab === index }"
          >
            {{ tab }}
          </button>
        </div>
        <div>
          <h3>
            Notícia <span>{{ newsName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editNews">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Título da notícia
        </h3>
        <input
          type="text"
          :placeholder="newsName"
          v-model="edit.titlePt"
          style="width: 30vw;"
        />
        <h3 class="dashboard_subheader">
          Conteúdo da notícia
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="edit.contentPt"
            :options="editorOption"
            ref="quillEditor"
          >
          </quill-editor>
        </div>
      </div>
    </div>

    <div class="admin_actions_panel" v-show="currentTab === 1">
      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div
          class="admin_actions_panel__header__languages flex flex-jc-sb flex-ai-c"
        >
          <button
            v-for="(tab, index) in tabs"
            :key="tab"
            @click="currentTab = index"
            :class="{ active: currentTab === index }"
          >
            {{ tab }}
          </button>
        </div>
        <div>
          <h3>
            Notícia <span>{{ newsName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editNews">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          News title
        </h3>
        <input
          type="text"
          :placeholder="newsName"
          v-model="edit.titleEn"
          style="width: 30vw;"
        />
        <h3 class="dashboard_subheader">
          News content
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="edit.contentEn"
            :options="editorOption"
            ref="quillEditor"
          >
          </quill-editor>
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
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      newsName: "",
      edit: {
        titlePt: "",
        titleEn: "",
        contentPt: "",
        contentEn: "",
        date: ""
      },
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: ["Porto Sans Stencil"] }],
            [
              {
                color: ["#080808", "#ffffff", "#c94d24", "#666666", "#999999"]
              },
              {
                background: [
                  "#080808",
                  "#ffffff",
                  "#c94d24",
                  "#666666",
                  "#999999"
                ]
              }
            ],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ]
        }
      }
    };
  },
  created() {
    this.edit.titlePt = this.newsName = this.getAdminNewsById(
      this.getAdminSelectedNewsId
    ).title_pt;

    this.edit.titleEn = this.getAdminNewsById(
      this.getAdminSelectedNewsId
    ).title_eng;

    this.edit.contentPt = this.getAdminNewsById(
      this.getAdminSelectedNewsId
    ).description_pt;

    this.edit.contentEn = this.getAdminNewsById(
      this.getAdminSelectedNewsId
    ).description_eng;
  },
  computed: {
    ...mapGetters(["getAdminSelectedNewsId", "getAdminNewsById"]),
    getMonth() {
      let today = this.getDateTime();

      return today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth();
    },
    getDay() {
      let today = this.getDateTime();

      return today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    },
    getYear() {
      let today = this.getDateTime();

      return today.getFullYear();
    }
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "DashboardTN"
      });
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.edit.image = image;
    },
    async editNews() {
      this.$store.commit("SET_ADMIN_EDIT_NEWS", {
        title_pt: this.edit.titlePt,
        title_eng: this.edit.titleEn,
        description_pt: this.edit.contentPt,
        description_eng: this.edit.contentEn,
        published_date: `${this.getDay}-${this.getMonth}-${this.getYear}`,
        project_only: 1
      });

      try {
        await this.$store.dispatch("setAdminEditNews");
        await this.$store.dispatch("setAdminNews");
      } catch (error) {
        return error;
      }

      this.goBack();
    },
    getDateTime() {
      let dateTime = new Date();
      return dateTime;
    }
  }
};
</script>
