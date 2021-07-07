<template>
  <div class="admin_actions admin_projects_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel projects_panel" v-show="currentTab === 0">
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
            Adicionar projeto
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addProject">
            Confirmar
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form projects_panel__form">
        <h3 class="dashboard_subheader">
          Informação genérica
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="titleTxt">Título</label><br />
            <input
              id="titleTxt"
              type="text"
              placeholder="Título do projeto"
              v-model="add.title"
            />
          </div>
          <div>
            <label for="initialsTxt">Iniciais</label><br />
            <input
              id="initialsTxt"
              type="text"
              placeholder="Iniciais do projeto"
              v-model="add.initials"
            />
          </div>
          <div>
            <label for="referenceTxt">Referência</label><br />
            <input
              id="referenceTxt"
              type="text"
              placeholder="Referência do projeto"
              v-model="add.reference"
            />
          </div>
          <div>
            <label for="numberTxt">Contacto telefónico</label><br />
            <input
              id="numberTxt"
              type="text"
              max="9"
              placeholder="Contacto telefónico"
              v-model="add.number"
            />
          </div>
          <div>
            <label for="emailTxt">Email</label><br />
            <input
              type="email"
              id="emailTxt"
              placeholder="E-mail"
              v-model="add.email"
            />
          </div>
          <div>
            <label for="sdTxt">Data de início</label><br />
            <input
              id="sdTxt"
              type="date"
              placeholder="Data de início"
              v-model="add.startDate"
            />
          </div>
          <div>
            <label for="edTxt">Data de término</label><br />
            <input
              type="date"
              id="edTxt"
              placeholder="Data de fim"
              v-model="add.endDate"
            />
          </div>
          <div>
            <label for="coordinatorTxt">Coordenador</label><br />
            <select id="coordinatorTxt" v-model="add.coordinator">
              <option value="">Selecionar coordenador</option>
              <option
                v-for="user in $store.getters.getUsers"
                :key="user.id_user"
                :value="user.id_user"
                >{{ user.full_name }}</option
              >
            </select>
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Conteúdo do projeto
        </h3>

        <div class="area_edit_editor margin_bottom">
          <quill-editor
            v-model="add.contentPt"
            :options="editorOption"
            ref="quillEditor"
          >
          </quill-editor>
        </div>

        <h3 class="dashboard_subheader">
          Resumo do projeto
        </h3>

        <textarea
          id=""
          cols="30"
          rows="6"
          maxlength="100"
          placeholder="Resumo do projeto"
          v-model="add.resumePt"
        ></textarea>

        <h3 class="dashboard_subheader">
          Galeria & Ficha de Projeto
        </h3>

        <div class="admin_add_slider__images flex">
          <label class="custom-file-upload" style="margin-right: 2rem;">
            <input type="file" @change="uploadImage" />
            Upload de imagens
          </label>
          <div>
            <label class="custom-file-upload">
              <input type="file" @change="uploadPdf" />
              Upload da ficha de projeto
            </label>
            {{ add.pdf.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="admin_actions_panel projects_panel" v-show="currentTab === 1">
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
            Add project
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addProject">
            Confirm
          </button>
          <button class="edit_cancel_button" @click="goBack">
            Cancel
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form projects_panel__form">
        <h3 class="dashboard_subheader">
          Project information
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="titleTxt2">Título</label><br />
            <input
              id="titleTxt2"
              type="text"
              placeholder="Project title"
              v-model="add.title"
            />
          </div>
          <div>
            <label for="initialsTxt2">Iniciais</label><br />
            <input
              id="initialsTxt2"
              type="text"
              placeholder="Project initials"
              v-model="add.initials"
            />
          </div>
          <div>
            <label for="referenceTxt2">Referência</label><br />
            <input
              id="referenceTxt2"
              type="text"
              placeholder="Project reference"
              v-model="add.reference"
            />
          </div>
          <div>
            <label for="numberTxt2">Contacto telefónico</label><br />
            <input
              id="numberTxt2"
              type="text"
              max="9"
              placeholder="Project mobile phone"
              v-model="add.number"
            />
          </div>
          <div>
            <label for="emailTxt2">Email</label><br />
            <input
              type="email"
              id="emailTxt2"
              placeholder="E-mail"
              v-model="add.email"
            />
          </div>
          <div>
            <label for="sdTxt2">Data de início</label><br />
            <input
              id="sdTxt2"
              type="date"
              placeholder="Starting date"
              v-model="add.startDate"
            />
          </div>
          <div>
            <label for="edTxt2">Data de término</label><br />
            <input
              type="date"
              id="edTxt2"
              placeholder="Ending date"
              v-model="add.endDate"
            />
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Project content
        </h3>

        <div class="area_edit_editor margin_bottom">
          <quill-editor
            v-model="add.contentEn"
            :options="editorOption"
            ref="quillEditor"
          >
          </quill-editor>
        </div>

        <h3 class="dashboard_subheader">
          Project summary
        </h3>

        <textarea
          id=""
          cols="30"
          rows="6"
          maxlength="100"
          placeholder="Project summary"
          v-model="add.resumeEn"
        ></textarea>

        <h3 class="dashboard_subheader">
          Images & Project file
        </h3>

        <div class="admin_add_slider__images">
          <label class="custom-file-upload" style="margin-right: 2rem;">
            <input type="file" @change="uploadImage" />
            Images upload
          </label>
          <label class="custom-file-upload">
            <input type="file" @change="uploadPdf" />
            Project file upload
          </label>
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
      add: {
        title: "",
        initials: "",
        reference: "",
        number: "",
        email: "",
        startDate: "",
        endDate: "",
        contentPt: "",
        contentEn: "",
        image: "",
        resumePt: "",
        resumeEn: "",
        pdf: ""
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
      },
      teamRows: [1]
    };
  },
  async created() {
    try {
      await this.$store.dispatch("setUsers");
      console.log(this.$store.getters.getUsers);
    } catch (error) {
      return error;
    }
  },
  computed: {
    teamRowsLength() {
      let length = this.teamRows.length;

      return length;
    }
  },
  methods: {
    async addProject() {
      this.$store.commit("SET_PROJECTS_ADD_FORM", {
        title: this.add.title,
        initials: this.add.initials,
        reference: this.add.reference,
        desc_html_structure_eng: this.add.contentEn,
        desc_html_structure_pt: this.add.contentPt,
        summary_eng: this.add.resumeEn,
        summary_pt: this.add.resumePt,
        project_contact: this.add.number,
        project_email: this.add.email,
        start_date: this.add.startDate,
        end_date: this.add.endDate,
        pdf_path: this.add.pdf,
        coordinator: this.add.coordinator
      });

      try {
        await this.$store.dispatch("setAdminAddProjects");
        await this.$store.dispatch("setAdminProjects");

        if (this.$store.getters.getAddProjectStatus === 201)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.goBack();
    },
    styleEditorHeight() {
      let height = document.querySelector(".area_edit_editor").offsetHeight;

      console.log(height);

      let toolbar = document.querySelector(".ql-toolbar");
      let editor = document.querySelector(".ql-editor");

      editor.style.height += `${height - toolbar.offsetHeight}px`;
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.add.image = image;
    },
    uploadPdf(e) {
      const pdf = e.target.files[0];
      this.add.pdf = pdf;

      console.log(this.add.pdf);
    },
    goBack() {
      this.$router.push({
        name: "DashboardProjects"
      });
    },
    addHtmlTeamRow(index) {
      console.log(index);

      this.teamRows.push(index + 1);
    },
    removeHtmlTeamRow(index) {
      this.teamRows = this.teamRows.filter(row => row !== index);
    },
    notificationSuccess() {
      this.$toast.success("Projeto inserido com sucesso!", {
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
