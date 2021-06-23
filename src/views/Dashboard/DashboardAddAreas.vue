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
            Adicionar área
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addArea">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Nome da área
        </h3>
        <input
          type="text"
          placeholder="Nome da área"
          v-model="addPt.areaName"
        />
        <h3 class="dashboard_subheader">
          Conteúdo da área
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="addPt.content"
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
            Add area
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addArea">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Area name
        </h3>
        <input
          type="text"
          placeholder="Nome da área"
          v-model="addEn.areaName"
        />
        <h3 class="dashboard_subheader">
          Area information
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="addEn.content"
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
      addPt: {
        areaName: "",
        content: ""
      },
      addEn: {
        areaName: "",
        content: ""
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
    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    // let arr = document.querySelectorAll(".admin_actions_panel");

    // arr.forEach(i => {
    //   i.style.paddingLeft = `${navbar_width}px`;
    // });

    this.styleEditorHeight();
  },
  methods: {
    async addArea() {
      this.$store.commit("SET_ADMIN_ADD_AREA", {
        namePt: this.addPt.areaName !== "" ? this.addPt.areaName : "",
        contentPt: this.addPt.content !== "" ? this.addPt.content : "",
        nameEn: this.addEn.areaName !== "" ? this.addEn.areaName : "",
        contentEn: this.addEn.conten !== "" ? this.addEn.areaName : ""
      });

      console.log(
        `${this.addPt.areaName} - ${this.addPt.content}
        ${this.addEn.areaName} - ${this.addEn.content}`
      );

      try {
        this.$store.dispatch("setAdminAddArea");
        this.$store.dispatch("setAdminAreas");
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
        name: "DashboardAreas"
      });
    }
  }
};
</script>
