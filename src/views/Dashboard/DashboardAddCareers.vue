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
            Adicionar carreira
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addCareer">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <div class="grid">
          <div>
            <h3 class="dashboard_subheader">
              Nome da carreira
            </h3>
            <input
              type="text"
              placeholder="Nome da carreira"
              v-model="add.titlePt"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              Categorias
            </h3>
            <div class="flex">
              <input
                type="text"
                placeholder="Categoria 1"
                v-model="add.category_1"
                style="margin-right: 2rem;"
              />
              <input
                type="text"
                placeholder="Categoria 2"
                v-model="add.category_2"
                style="margin-right: 2rem;"
              />
              <input
                type="text"
                placeholder="Categoria 3"
                v-model="add.category_3"
              />
            </div>
          </div>
        </div>
        <h3 class="dashboard_subheader">
          Conteúdo da carreira
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
            Add career
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addCareer">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <div class="grid">
          <div>
            <h3 class="dashboard_subheader">
              Career name
            </h3>
            <input
              type="text"
              placeholder="Career name"
              v-model="add.titleEn"
            />
          </div>
          <div>
            <h3 class="dashboard_subheader">
              Categories
            </h3>
            <select>
              <option value="">Business</option>
              <option value="">Tech</option>
              <option value="">Health</option>
              <option value="">Arts</option>
            </select>
          </div>
        </div>
        <h3 class="dashboard_subheader">
          Career information
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
      add: {
        titlePt: "",
        titleEn: "",
        contentPt: "",
        contentEn: "",
        category_1: "",
        category_2: "",
        category_3: ""
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
    async addCareer() {
      this.$store.commit("SET_ADMIN_ADD_CAREERS_FORM", {
        designation_pt: this.add.titlePt,
        designation_eng: this.add.titleEn,
        category_1: this.add.category_1,
        category_2: this.add.category_2,
        category_3: this.add.category_3,
        desc_html_structure_pt: this.add.contentPt,
        desc_html_structure_eng: this.add.contentEn,
        pdf_path: "link",
        candidacy_link: "link"
      });

      try {
        await this.$store.dispatch("setAdminAddCareer");
        await this.$store.dispatch("setAdminCareers");

        this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.goBack();
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
        name: "DashboardCareers"
      });
    },
    notificationSuccess() {
      this.$toast.success("Posição adicionada com sucesso!", {
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
