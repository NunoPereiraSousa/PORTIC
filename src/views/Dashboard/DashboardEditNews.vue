<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div
          class="admin_actions_panel__header__languages flex flex-jc-sb flex-ai-c"
        >
          <button class="pt selected">Português</button>
          <hr />
          <button class="en">
            Inglês
          </button>
        </div>
        <div>
          <h3>
            Notícia <span>{{ newsName }}</span>
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
          Título da notícia
        </h3>
        <input type="text" :placeholder="newsName" v-model="newsTxt" />
        <h3 class="dashboard_subheader">
          Conteúdo da notícia
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
      newsName: "",
      content: "",
      newsTxt: "",
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
    ...mapGetters(["getSelectedNewsId", "getNewsById"])
  },
  created() {
    this.newsName = this.getNewsById(this.getSelectedNewsId).title;

    this.content = this.getNewsById(this.getSelectedNewsId).content;
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_actions_panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "DashboardTN"
      });
    },
    save() {
      console.log(this.content);
    }
  }
};
</script>
