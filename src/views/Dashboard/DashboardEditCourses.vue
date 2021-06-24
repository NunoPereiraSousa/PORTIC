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
            Curso <span>{{ courseName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editCourse">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Nome do curso
        </h3>
        <input type="text" :placeholder="courseName" v-model="edit.name" />
        <h3 class="dashboard_subheader">
          Conteúdo do curso
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
            Course <span>{{ courseName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editCourse">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Course name
        </h3>
        <input type="text" :placeholder="courseName" v-model="edit.name" />
        <h3 class="dashboard_subheader">
          Course name
        </h3>
        <input type="text" :placeholder="courseName" v-model="edit.name" />
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
      edit: {
        name: "",
        contentPt: "",
        contentEn: ""
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
  computed: {
    ...mapGetters(["getAdminSelectedCourseId", "getAdminCourseById"]),
    courseName() {
      return this.getAdminCourseById(this.getAdminSelectedCourseId).designation;
    }
  },
  mounted() {
    this.edit.name = this.courseName;
    this.edit.contentPt = this.getAdminCourseById(
      this.getAdminSelectedCourseId
    ).html_structure_pt;
    this.edit.contentEn = this.getAdminCourseById(
      this.getAdminSelectedCourseId
    ).html_structure_eng;

    this.styleEditorHeight();
  },
  methods: {
    async editCourse() {
      this.$store.commit("SET_ADMIN_EDIT_COURSE", {
        designation: this.edit.name,
        html_structure_eng: this.edit.contentEn,
        html_structure_pt: this.edit.contentPt
      });

      console.log(this.edit.name, this.edit.contentPt, this.edit.contentEn);

      try {
        await this.$store.dispatch("setAdminEditCourse");
        await this.$store.dispatch("setAdminCourses");

        this.$router.push({
          name: "DashboardCourses"
        });
      } catch (error) {
        console.log(error);
        return error;
      }
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
        name: "DashboardCourses"
      });
    }
  }
};
</script>
