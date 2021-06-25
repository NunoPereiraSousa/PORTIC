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
            Área <span>{{ areaName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editArea">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <form class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Nome da área
        </h3>
        <input
          type="text"
          placeholder="Nome da área"
          v-model="editPt.areaName"
        />
        <h3 class="dashboard_subheader">
          Conteúdo da área
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="editPt.content"
            :options="editorOption"
            ref="quillEditor"
          >
          </quill-editor>
        </div>
      </form>
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
            Area <span>{{ areaName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editArea">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <form class="admin_actions_panel__form">
        <h3 class="dashboard_subheader">
          Area name
        </h3>
        <input type="text" placeholder="Area name" v-model="editEn.areaName" />
        <h3 class="dashboard_subheader">
          Area information
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="editEn.content"
            :options="editorOption"
            ref="quillEditor"
          >
          </quill-editor>
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
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      areaName: "",
      editPt: {
        areaName: "",
        content: ""
      },
      editEn: {
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
  computed: {
    ...mapGetters(["getAdminSelectedAreaId", "getAdminAreaById"])
  },
  mounted() {
    this.areaName = this.getAdminAreaById(
      this.getAdminSelectedAreaId
    ).designation_pt;

    this.contentPt = this.getAdminAreaById(
      this.getAdminSelectedAreaId
    ).description_pt;

    this.areaNameEn = this.getAdminAreaById(
      this.getAdminSelectedAreaId
    ).designation_eng;

    this.contentEn = this.getAdminAreaById(
      this.getAdminSelectedAreaId
    ).description_eng;

    this.editPt.areaName = this.areaName;
    this.editPt.content = this.contentPt;

    this.editEn.areaName = this.areaNameEn;
    this.editEn.content = this.contentEn;

    this.styleEditorHeight();
  },
  methods: {
    async editArea() {
      this.$store.commit("SET_ADMIN_EDIT_AREA", {
        namePt: this.editPt.areaName,
        contentPt: this.editPt.content,
        nameEn: this.editEn.areaName,
        contentEn: this.editEn.content
      });

      try {
        this.$store.dispatch("setAdminEditAreas");
        this.$store.dispatch("setAdminAreas");

        // notifications
        this.$store.getters.getEditAreaStatus === 200
          ? this.notificationSuccess()
          : this.notificationError();
      } catch (error) {
        console.log(error);
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
        name: "DashboardAreas"
      });
    },
    notificationSuccess() {
      this.$toast.success("Área editada com sucesso!", {
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
