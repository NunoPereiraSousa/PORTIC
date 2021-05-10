<template>
  <div
    class="admin_projects__slider admin_projects__add_slider admin_add_slider grid"
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
          Adicionar projeto
        </h3>
      </div>
      <div class="flex">
        <button
          class="admin_projects__add_slider__header__confirm"
          @click="save"
        >
          Confirmar
        </button>
        <button
          class="admin_projects__add_slider__header__cancel"
          @click="closeSlider"
        >
          Cancelar
        </button>
      </div>
    </div>
    <hr class="admin_add_slider__divider" />
    <div class="admin_add_slider__scroll">
      <h3 class="admin_add_slider__subheader">
        Informação genérica
      </h3>
      <div class="admin_add_slider__form flex">
        <input type="text" placeholder="Nome do projeto" />
        <input type="text" placeholder="Contacto telefónico" />
        <input type="text" placeholder="E-mail" />
      </div>
      <h3 class="admin_add_slider__subheader">
        Conteúdo do projeto
      </h3>
      <div class="admin_add_slider__editor margin_editor">
        <quill-editor
          v-model="content"
          :options="editorOption"
          ref="quillEditor"
        >
        </quill-editor>
      </div>
      <h3 class="admin_add_slider__subheader">
        Galeria
      </h3>
      <div class="admin_add_slider__images">
        <label class="custom-file-upload">
          <input type="file" />
          Upload de imagens
        </label>
      </div>
      <h3 class="admin_add_slider__subheader">
        Equipa do projeto
      </h3>
      <div class="admin_add_slider__team">
        <div v-for="index in teamRows" :key="index">
          <div
            :id="index"
            class="admin_add_slider__team__form flex flex-ai-c flex-jc-sb"
          >
            <div class="admin_add_slider__team__form__grid grid">
              <input type="text" placeholder="Cargo no projeto" />
              <input type="text" placeholder="Nome" />
              <label class="custom-file-upload">
                <input type="file" />
                Fotografia
              </label>
            </div>
            <div>
              <button
                class="admin_add_slider__team__form__grid__add"
                @click="addHtmlTeamRow(index)"
              >
                +1 Membro
              </button>
              <button
                class="admin_add_slider__team__form__grid__remove"
                v-if="teamRowsLength > 1"
                @click="removeHtmlTeamRow(index)"
              >
                -1 Membro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProjectSlider",
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
      },
      teamRows: [1]
    };
  },
  computed: {
    teamRowsLength() {
      let length = this.teamRows.length;

      return length;
    }
  },
  mounted() {
    this.styleEditorHeight();
  },
  methods: {
    styleEditorHeight() {
      let editor = document.querySelector(".admin_add_slider__scroll");
      let height = editor.offsetHeight;

      console.log(height);

      let toolbarArr = document.querySelectorAll(".ql-toolbar");

      let textAreaArr = document.querySelectorAll(".ql-editor");

      textAreaArr.forEach(el => {
        toolbarArr.forEach(toolbar => {
          el.style.height = `${height / 2 - toolbar.offsetHeight}px`;
        });
      });
    },
    closeSlider() {
      let slider = document.querySelector(".admin_projects__add_slider");
      let overlay = document.querySelector(
        ".admin_projects__panel__overlay_add"
      );

      slider.classList.toggle("open_add_project_slider");
      overlay.classList.toggle("open_add_project_overlay");
    },
    save() {
      console.log(this.content);
    },
    addHtmlTeamRow(index) {
      console.log(index);

      this.teamRows.push(index + 1);
    },
    removeHtmlTeamRow(index) {
      this.teamRows = this.teamRows.filter(row => row !== index);
    }
  }
};
</script>
