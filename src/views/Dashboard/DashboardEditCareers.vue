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
            Carreira <span>{{ careerName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="save">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Nome da carreira
        </h3>
        <input type="text" :placeholder="careerName" v-model="careerTxt" />
        <h3 class="dashboard_subheader">
          Conteúdo da carreira
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="content"
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
            Career <span>{{ careerName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="save">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Career name
        </h3>
        <input type="text" :placeholder="careerName" v-model="careerTxt" />
        <h3 class="dashboard_subheader">
          Career information
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="contentEN"
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
      careerName: "",
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      content: "",
      contentEN: "",
      careerTxt: "",
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
  computed: {
    ...mapGetters(["getSelectedCareerByID", "getCareerByID"])
  },
  created() {
    this.careerName = this.getCareerByID(
      this.getSelectedCareerByID
    ).designation;

    this.content = this.getCareerByID(
      this.getSelectedCareerByID
    ).desc_html_structure;
    this.contentEN = this.getCareerByID(
      this.getSelectedCareerByID
    ).desc_html_structure;
  },
  mounted() {
    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;
    // let arr = document.querySelectorAll(".admin_actions_panel");
    // arr.forEach(i => {
    //   i.style.paddingLeft = `${navbar_width}px`;
    // });
    // this.styleEditorHeight();
  },
  methods: {
    styleEditorHeight() {
      let editor = document.querySelector(".area_edit_editor");
      let height = editor.offsetHeight;

      let toolbarArr = document.querySelector(".ql-toolbar");
      let textAreaArr = document.querySelector(".ql-editor");

      textAreaArr.style.height = `${height - toolbarArr.offsetHeight}px`;
    },
    goBack() {
      this.$router.push({
        name: "DashboardCareers"
      });
    },
    save() {
      console.log(this.content);
    }
  }
};
</script>
