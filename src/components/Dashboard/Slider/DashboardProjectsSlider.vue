<template>
  <div
    class="admin_projects__slider admin_projects_edit__slider admin_add_slider grid"
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
          Projeto <span>{{ projectName }}</span>
        </h3>
      </div>
      <div class="flex">
        <button
          class="admin_projects__add_slider__header__confirm"
          @click="save"
        >
          Editar
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
        <div v-if="imagesArrLength > 0">
          <vue-glide
            :startAt="0"
            :gap="40"
            :breakpoints="{
              1300: {
                perView: 3
              }
            }"
            :rewind="false"
            :bound="true"
            :infinite="false"
          >
            <vue-glide-slide v-for="image in images" :key="image">
              <div
                class="admin_add_slider__images__img"
                :style="imageStyle(image)"
              >
                <div
                  class="admin_add_slider__images__img__actions flex flex-ai-c flex-jc-sb"
                >
                  <button class="admin_add_slider__images__img__actions__edit">
                    Editar
                  </button>
                  <button
                    class="admin_add_slider__images__img__actions__remove"
                  >
                    Remover
                  </button>
                </div>
              </div></vue-glide-slide
            >
            <template slot="control" v-if="imagesArrLength > 3">
              <button class="controls_btn" data-glide-dir="<">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400.004 400.004"
                  class="left__arrow"
                >
                  <path
                    d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0012.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z"
                  ></path>
                </svg>
              </button>
              <button class="controls_btn" data-glide-dir=">">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                  class="right__arrow"
                >
                  <path
                    d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"
                  ></path>
                </svg>
              </button>
            </template>
          </vue-glide>
        </div>
        <div v-else>
          <p>Não existem imagens associadas a este projeto</p>
        </div>

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
import { quillEditor } from "vue-quill-editor";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "DashboardProjectsSlider",
  props: {
    projectName: {
      type: String,
      required: false
    },
    images: {
      type: Array,
      required: false
    }
  },
  components: {
    quillEditor,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
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
      },
      teamRows: [1]
    };
  },
  mounted() {
    this.styleEditorHeight();
  },
  computed: {
    teamRowsLength() {
      let length = this.teamRows.length;

      return length;
    },
    imagesArrLength() {
      let images = this.images;
      let length;

      if (images) {
        length = images.length;
      }

      console.log(length);

      return length;
    }
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
    imageStyle(image) {
      return `background-image: url('${image}')`;
    },
    addHtmlTeamRow(index) {
      console.log(index);

      this.teamRows.push(index + 1);
    },
    removeHtmlTeamRow(index) {
      this.teamRows = this.teamRows.filter(row => row !== index);
    },
    closeSlider() {
      let admin_projects__panel__overlay_slide = document.querySelector(
        ".admin_projects__panel__overlay_slide"
      );

      let admin_projects__slider = document.querySelector(
        ".admin_projects_edit__slider"
      );

      admin_projects__panel__overlay_slide.classList.toggle(
        "show_overlay_slide"
      );
      admin_projects__slider.classList.toggle("show_slider");
    },
    save() {
      console.log(this.content);
    }
  }
};
</script>
