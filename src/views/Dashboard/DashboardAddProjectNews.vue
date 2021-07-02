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
            Adicionar notícia
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addNews">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form addNews">
        <div class="grid">
          <div>
            <h3 class="dashboard_subheader">
              Título da notícia
            </h3>
            <input
              type="text"
              placeholder="Título da notícia"
              v-model="add.titlePt"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              Imagem da notícia
            </h3>
            <div class="flex">
              <label class="custom-file-upload" style="margin-right: 2rem;">
                <input type="file" @change="uploadImage" />
                Image
              </label>
              {{ name }}
            </div>
          </div>
        </div>
        <h3 class="dashboard_subheader">
          Conteúdo da notícia
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="add.contentPt"
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
            Add news
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addNews">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          News name
        </h3>
        <input type="text" placeholder="Nome da área" v-model="add.titleEn" />
        <h3 class="dashboard_subheader">
          News information
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="add.contentEn"
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

export default {
  components: {
    DashboardHeader
  },
  data: () => {
    return {
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      name: "",
      add: {
        titlePt: "",
        titleEn: "",
        contentPt: "",
        contentEn: "",
        image: ""
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
  mounted() {
    this.styleEditorHeight();
  },
  computed: {
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
    styleEditorHeight() {
      let editor = document.querySelector(".area_edit_editor");
      let height = editor.offsetHeight;

      let toolbarArr = document.querySelectorAll(".ql-toolbar");
      let textAreaArr = document.querySelectorAll(".ql-editor");
      let textAreaHeight = document.querySelector(".ql-editor").offsetHeight;

      toolbarArr.forEach(tb => {
        textAreaArr.forEach(ta => {
          ta.style.height = `${height -
            textAreaHeight -
            tb.offsetHeight / 2 -
            tb.offsetHeight}px`;
        });
      });
    },
    goBack() {
      this.$router.push({
        name: "DashboardProjects"
      });
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.add.image = image;
      this.name = image.name;
    },
    async addNews() {
      console.log(`${this.getDay}-${this.getMonth}-${this.getYear}`);

      this.$store.commit("SET_ADD_PROJECT_NEWS_FORM", {
        title_pt: this.add.titlePt,
        title_eng: this.add.titleEn,
        description_pt: this.add.contentPt,
        description_eng: this.add.contentEn,
        published_date: `${this.getDay}-${this.getMonth}-${this.getYear}`,
        file: this.add.image
      });

      try {
        await this.$store.dispatch("setAdminAddProjectNews");
        await this.$store.dispatch("setAdminProjects");
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
