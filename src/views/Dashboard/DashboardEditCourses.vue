<template>
  <div class="admin_edit_area flex">
    <DashboardHeader />

    <div class="admin_edit_area_panel">
      <div class="admin_edit_area_panel__header flex flex-jc-sb flex-ai-c">
        <div
          class="admin_edit_area_panel__header__languages flex flex-jc-sb flex-ai-c"
        >
          <button class="pt selected">Português</button>
          <hr />
          <button class="en">
            Inglês
          </button>
        </div>
        <div>
          <h3>
            Curso <span>{{ courseName }}</span>
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

      <div class="admin_edit_area_panel__form">
        <input type="text" :placeholder="courseName" v-model="courseTxt" />
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
      courseName: "",
      content: "",
      courseTxt: "",
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
    ...mapGetters(["getSelectedCourseByID", "getCourseByID"])
  },
  created() {
    this.courseName = this.getCourseByID(this.getSelectedCourseByID).courseName;
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_edit_area_panel"
    ).style.paddingLeft = `${navbar_width}px`;

    this.styleEditorHeight();
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
        name: "DashboardAreas"
      });
    },
    save() {
      console.log(this.content);
    }
  }
};
</script>
