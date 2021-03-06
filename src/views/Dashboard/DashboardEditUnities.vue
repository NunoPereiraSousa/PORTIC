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
            Unidade <span>{{ unityName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editUnit">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__unities__form">
        <h3 class="dashboard_subheader">
          Nome da unidade
        </h3>
        <input type="text" v-model="edit.designation" />
        <h3 class="dashboard_subheader">
          Imagem da unidade
        </h3>
        <div>
          <label class="custom-file-upload">
            <input type="file" @change="uploadImage" />
            Selecionar imagem
          </label>
          {{ edit.image.name }}
        </div>
        <h3 class="dashboard_subheader">
          Conteúdo da unidade
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="edit.description_pt"
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
            Unity <span>{{ unityName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editUnit">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__unities__form">
        <h3 class="dashboard_subheader">
          Unity name
        </h3>
        <input type="text" v-model="edit.designation" />
        <h3 class="dashboard_subheader">
          Unity information
        </h3>
        <div class="area_edit_editor">
          <quill-editor
            v-model="edit.description_eng"
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
      unityName: "",
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      edit: {
        designation: "",
        description_pt: "",
        description_eng: "",
        image: ""
      },
      unityTxt: "",
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
    ...mapGetters(["getAdminSelectedUnitId", "getAdminUnitById"])
  },
  created() {
    this.unityName = this.getAdminUnitById(
      this.getAdminSelectedUnitId
    ).designation;
  },
  mounted() {
    this.styleEditorHeight();

    this.edit.designation = this.unityName;

    this.edit.description_pt = this.getAdminUnitById(
      this.getAdminSelectedUnitId
    ).description_pt;

    this.edit.description_eng = this.getAdminUnitById(
      this.getAdminSelectedUnitId
    ).description_eng;
  },
  methods: {
    async editUnit() {
      this.$store.commit("SET_UNITS_EDIT_FORM", {
        designation: this.edit.designation,
        description_pt: this.edit.description_pt,
        description_eng: this.edit.description_eng,
        image: this.edit.image
      });

      try {
        await this.$store.dispatch("setAdminEditUnits");
        await this.$store.dispatch("setAdminEditUnitImg");
        await this.$store.dispatch("setAdminUnits");

        if (this.$store.getters.getEditUnitStatus === 200)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.goBack();
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.edit.image = image;
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
    },
    notificationSuccess() {
      this.$toast.success("Unidade editada com sucesso!", {
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
