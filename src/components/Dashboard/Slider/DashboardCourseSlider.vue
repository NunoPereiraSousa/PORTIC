<template>
  <div
    class="admin_courses__slider admin_courses_edit__slider admin_add_slider grid"
  >
    <div class="admin_add_slider__header flex flex-jc-sb flex-ai-c">
      <div
        class="admin_add_slider__header__languages flex flex-jc-sb flex-ai-c"
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
    </div>
    <hr class="admin_add_slider__divider" />
    <div class="admin_add_slider__input">
      <input type="text" placeholder="Nome do curso" />
    </div>
    <div class="admin_add_slider__editor">
      <quill-editor v-model="content" :options="editorOption" ref="quillEditor">
      </quill-editor>
    </div>
    <div class="admin_add_slider__footer flex flex-jc-sb flex-ai-c">
      <button class="admin_add_slider__footer__confirm" @click="save">
        Confirmar
      </button>
      <button class="admin_add_slider__footer__cancel" @click="closeSlider">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  name: "DashboardCourseSlider",
  props: {
    courseName: {
      type: String,
      required: false
    }
  },
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
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
    styleEditorHeight() {
      let editor = document.querySelector(".admin_add_slider__editor");
      let height = editor.offsetHeight;

      let toolbarArr = document.querySelectorAll(".ql-toolbar");
      let textAreaArr = document.querySelectorAll(".ql-editor");

      textAreaArr.forEach(el => {
        toolbarArr.forEach(toolbar => {
          el.style.height = `${height - toolbar.offsetHeight}px`;
        });
      });
    },
    closeSlider() {
      let admin_courses__panel__overlay_slide = document.querySelector(
        ".admin_courses__panel__overlay_slide"
      );

      let admin_courses__slider = document.querySelector(
        ".admin_courses_edit__slider"
      );

      admin_courses__panel__overlay_slide.classList.toggle(
        "show_overlay_slide"
      );
      admin_courses__slider.classList.toggle("show_slider");
    },
    save() {
      console.log(this.content);
    }
  }
};
</script>
