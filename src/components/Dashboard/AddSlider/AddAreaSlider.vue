<template>
  <div
    class="admin_areas__slider admin_areas__add_slider admin_add_slider grid"
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
          Adicionar área
        </h3>
      </div>
    </div>
    <hr class="admin_add_slider__divider" />
    <div class="admin_add_slider__input">
      <input type="text" placeholder="Nome da área" />
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
export default {
  name: "AddAreaSlider",
  data: () => {
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

      console.log(editor);

      let toolbarArr = document.querySelectorAll(".ql-toolbar");

      let textAreaArr = document.querySelectorAll(".ql-editor");

      textAreaArr.forEach(el => {
        toolbarArr.forEach(toolbar => {
          el.style.height = `${height - toolbar.offsetHeight}px`;
        });
      });
    },
    closeSlider() {
      let slider = document.querySelector(".open_add_area_slider");
      let overlay = document.querySelector(".admin_areas__panel__overlay_add");

      slider.classList.toggle("open_add_area_slider");
      overlay.classList.toggle("open_add_area_overlay");
    },
    save() {
      console.log(this.content);
    }
  }
};
</script>
