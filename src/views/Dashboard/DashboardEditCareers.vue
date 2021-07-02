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
          <button class="edit_confirm_button" @click="editCarrer">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form careers">
        <h3 class="dashboard_subheader">
          Nome da carreira
        </h3>
        <input type="text" v-model="edit.titlePt" />
        <div>
          <h3 class="dashboard_subheader">
            Categorias
          </h3>
          <input
            type="text"
            v-model="edit.category_1"
            style="margin-right: 2rem;"
          />
          <input
            type="text"
            v-model="edit.category_2"
            style="margin-right: 2rem;"
          />
          <input type="text" v-model="edit.category_3" />
        </div>
        <h3 class="dashboard_subheader">
          Conteúdo da carreira
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
            Career <span>{{ careerName }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editCarrer">
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
        <input type="text" v-model="edit.titleEn" />
        <h3 class="dashboard_subheader">
          Career information
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
      careerName: "",
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      edit: {
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
  created() {},
  mounted() {
    // let id = this.getAdminSelectedCareerId;

    // let career = this.getAdminCareerById(this.getAdminSelectedCareerId);

    console.log(this.getAdminCareerById(this.getAdminSelectedCareerId));
    // console.log(career);

    this.careerName = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).designation_pt;

    this.edit.titlePt = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).designation_pt;
    this.edit.titleEn = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).designation_eng;
    this.edit.contentPt = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).desc_html_structure_pt;
    this.edit.contentEn = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).desc_html_structure_eng;
    this.edit.category_1 = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).categories[0];
    this.edit.category_2 = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).categories[1];
    this.edit.category_3 = this.getAdminCareerById(
      this.getAdminSelectedCareerId
    ).categories[2];
  },
  computed: {
    ...mapGetters(["getAdminSelectedCareerId", "getAdminCareerById"])
  },
  methods: {
    async editCarrer() {
      this.$store.commit("SET_ADMIN_EDIT_CAREERS_FORM", {
        designation_pt: this.edit.titlePt,
        designation_eng: this.edit.titleEn,
        category_1: this.edit.category_1,
        category_2: this.edit.category_2,
        category_3: this.edit.category_3,
        desc_html_structure_pt: this.edit.contentPt,
        desc_html_structure_eng: this.edit.contentEn,
        pdf_path: "link",
        candidacy_link: "link"
      });

      // console.log(
      //   this.edit.titlePt,
      //   this.edit.titleEn,
      //   this.edit.category_1,
      //   this.edit.category_2,
      //   this.edit.category_3,
      //   this.edit.contentPt,
      //   this.edit.contentEn
      // );

      try {
        await this.$store.dispatch("setAdminEditCareer");
        await this.$store.dispatch("setAdminCareers");

        this.$store.getters.getAdminEditCareerStatus === 200
          ? this.notificationSuccess()
          : this.notificationError();
      } catch (error) {
        console.log("error", error);
        return error;
      }
    },
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
    notificationSuccess() {
      this.$toast.success("Posição editada com sucesso!", {
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
