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
            Adicionar unidade
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addUnit">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Nome da Unidade e Fotografia
        </h3>

        <div class="flex flex-ai-c">
          <input
            type="text"
            placeholder="Nome da unidade"
            style="margin-right: 2rem;"
            v-model="add.designation"
          />
          <label class="custom-file-upload">
            <input type="file" @change="uploadImage" />
            Upload de imagens
          </label>
        </div>

        <h3 class="dashboard_subheader">
          Conteúdo do projeto
        </h3>

        <div class="area_edit_editor">
          <quill-editor
            v-model="add.description_pt"
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
            Add unity
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addUnit">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Unity name and image
        </h3>

        <div class="flex flex-ai-c">
          <input
            type="text"
            placeholder="Unity name"
            style="margin-right: 2rem;"
            v-model="add.designation"
          />
        </div>

        <h3 class="dashboard_subheader">
          Unity information
        </h3>

        <div class="area_edit_editor">
          <quill-editor
            v-model="add.description_eng"
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
      add: {
        designation: "",
        description_pt: "",
        description_eng: "",
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
  methods: {
    async addUnit() {
      this.$store.commit("SET_UNITS_ADD_FORM", {
        file: this.add.image,
        designation: this.add.designation,
        description_pt: this.add.description_pt,
        description_eng: this.add.description_eng
      });

      try {
        await this.$store.dispatch("setAdminAddUnits");
        await this.$store.dispatch("setAdminUnits");
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.add.image = image;
    },
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
        name: "DashboardUnities"
      });
    }
  }
};
</script>
