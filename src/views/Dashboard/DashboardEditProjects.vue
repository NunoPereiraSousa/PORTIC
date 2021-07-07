<template>
  <div class="admin_actions admin_projects_actions flex">
    <DashboardHeader />
    <DashboardDeleteImgPopup />
    <div class="admin_projects__panel__overlay3" @click="closePopup3"></div>

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
            Projeto <span>{{ project.initials }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editProject">
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
              v-model="edit.title"
            />
          </div>
          <div>
            <label for="initialsTxt">Iniciais</label><br />
            <input
              id="initialsTxt"
              type="text"
              placeholder="Iniciais do projeto"
              v-model="edit.initials"
            />
          </div>
          <div>
            <label for="referenceTxt">Referência</label><br />
            <input
              id="referenceTxt"
              type="text"
              placeholder="Referência do projeto"
              v-model="edit.reference"
            />
          </div>
          <div>
            <label for="numberTxt">Contacto telefónico</label><br />
            <input
              id="numberTxt"
              type="text"
              max="9"
              placeholder="Contacto telefónico"
              v-model="edit.number"
            />
          </div>
          <div>
            <label for="emailTxt">Email</label><br />
            <input
              type="email"
              id="emailTxt"
              placeholder="E-mail"
              v-model="edit.email"
            />
          </div>
          <div>
            <label for="sdTxt">Data de início</label><br />
            <input
              id="sdTxt"
              type="date"
              placeholder="Data de início"
              v-model="edit.startDate"
            />
          </div>
          <div>
            <label for="edTxt">Data de término</label><br />
            <input
              type="date"
              id="edTxt"
              placeholder="Data de fim"
              v-model="edit.endDate"
            />
          </div>
          <div>
            <label for="coordinatorTxt">Coordenador</label><br />
            <select id="coordinatorTxt" v-model="edit.coordinator">
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
            v-model="edit.contentPt"
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
          v-model="edit.resumePt"
        ></textarea>

        <div>
          <h3 class="dashboard_subheader">
            Editar ficha de projeto
          </h3>

          <div>
            <label class="custom-file-upload" style="margin-right: 2rem;">
              <input type="file" @change="uploadPdf" />
              PDF upload
            </label>
            {{ edit.pdf.name }}

            <button
              class="edit_confirm_button"
              style="margin-left: 2rem;"
              @click="editPdf"
            >
              Editar
            </button>
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Galeria & Ficha de projeto
        </h3>

        <div
          class="projects_panel__form__images grid"
          v-if="imagesArrLength > 0"
        >
          <div
            v-for="image in getImages"
            :key="image.id_picture"
            class="projects_panel__form__images__img"
            :style="imageStyle(image.img)"
            @click="openEditPopup(image.id_picture)"
          >
            <div
              class="projects_panel__form__images__img__actions flex flex-ai-c flex-jc-c"
            >
              <!-- <button class="projects_panel__form__images__img__actions__edit">
                Editar
              </button> -->
              <button
                class="projects_panel__form__images__img__actions__remove"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Não existem imagens associadas a este projeto</p>
        </div>

        <h3 class="dashboard_subheader" style="margin-top: 3rem">
          Investidores
        </h3>

        <div class="investors__grid grid">
          <InvestorsCard
            v-for="investor in getInvestors"
            :key="investor.id_investor"
            :id="investor.id_investor"
            :name="investor.designation"
          />
        </div>

        <h3 class="dashboard_subheader" style="margin-top: 3rem">
          Equipa de projeto
        </h3>

        <!-- NÃO ESQUECER DESTE COMPONENTE PARA EDITAR UM TEAM MEMBER -->

        <div class="team__grid grid">
          <DashboardTeamCard
            v-for="user in getUsers"
            :key="user.id_user"
            :id="user.id_user"
            :name="user.full_name"
            :image="user.picture"
          />
        </div>

        <!-- <label class="custom-file-upload">
          <input type="file" @change="uploadImage" />
          Upload de imagens
        </label>

        <label class="custom-file-upload" style="margin-right: 2rem;">
          <input type="file" @change="uploadPdf" />
          Upload de pdf
        </label> -->

        <!-- <h3 class="dashboard_subheader">
          Equipa de projeto
        </h3>

        <div class="projects_panel__form__team">
          <div v-for="index in teamRows" :key="index">
            <div
              :id="index"
              class="projects_panel__form__team__form flex flex-ai-c flex-jc-sb"
            >
              <div class="projects_panel__form__team__form__grid grid">
                <input type="text" placeholder="Cargo no projeto" />
                <input type="text" placeholder="Nome" />
                <label class="custom-file-upload">
                  <input type="file" />
                  Fotografia
                </label>
              </div>
              <div>
                <button
                  class="projects_panel__form__team__form__grid__add"
                  @click="addHtmlTeamRow(index)"
                >
                  +1 Membro
                </button>
                <button
                  class="projects_panel__form__team__form__grid__remove"
                  v-if="teamRowsLength > 1"
                  @click="removeHtmlTeamRow(index)"
                >
                  -1 Membro
                </button>
              </div>
            </div>
          </div>
        </div> -->
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
            Project <span>{{ project.initials }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editProject">
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
              v-model="edit.title"
            />
          </div>
          <div>
            <label for="initialsTxt2">Iniciais</label><br />
            <input
              id="initialsTxt2"
              type="text"
              placeholder="Project initials"
              v-model="edit.initials"
            />
          </div>
          <div>
            <label for="referenceTxt2">Referência</label><br />
            <input
              id="referenceTxt2"
              type="text"
              placeholder="Project reference"
              v-model="edit.reference"
            />
          </div>
          <div>
            <label for="numberTxt2">Contacto telefónico</label><br />
            <input
              id="numberTxt2"
              type="text"
              max="9"
              placeholder="Project mobile phone"
              v-model="edit.number"
            />
          </div>
          <div>
            <label for="emailTxt2">Email</label><br />
            <input
              type="email"
              id="emailTxt2"
              placeholder="E-mail"
              v-model="edit.email"
            />
          </div>
          <div>
            <label for="sdTxt2">Data de início</label><br />
            <input
              id="sdTxt2"
              type="date"
              placeholder="Starting date"
              v-model="edit.startDate"
            />
          </div>
          <div>
            <label for="edTxt2">Data de término</label><br />
            <input
              type="date"
              id="edTxt2"
              placeholder="Ending date"
              v-model="edit.endDate"
            />
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Project content
        </h3>

        <div class="area_edit_editor margin_bottom">
          <quill-editor
            v-model="edit.contentEn"
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
          v-model="edit.resumeEn"
        ></textarea>

        <!-- <label class="custom-file-upload">
          <input type="file" @change="uploadImage" />
          Images upload+
        </label>

        <label class="custom-file-upload" style="margin-right: 2rem;">
          <input type="file" @change="uploadPdf" />
          PDF upload
        </label> -->

        <!-- <h3 class="dashboard_subheader">
          Project team
        </h3> -->

        <!-- <div class="projects_panel__form__team">
          <div v-for="index in teamRows" :key="index">
            <div
              :id="index"
              class="projects_panel__form__team__form flex flex-ai-c flex-jc-sb"
            >
              <div class="projects_panel__form__team__form__grid grid">
                <input type="text" placeholder="Project role" />
                <input type="text" placeholder="Name" />
                <label class="custom-file-upload">
                  <input type="file" />
                  Image
                </label>
              </div>
              <div>
                <button
                  class="projects_panel__form__team__form__grid__add"
                  @click="addHtmlTeamRow(index)"
                >
                  +1 Member
                </button>
                <button
                  class="projects_panel__form__team__form__grid__remove"
                  v-if="teamRowsLength > 1"
                  @click="removeHtmlTeamRow(index)"
                >
                  -1 Member
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardDeleteImgPopup from "@/components/Dashboard/Popup/DashboardDeleteImgPopup.vue";
import InvestorsCard from "@/components/Dashboard/InvestorsCard.vue";
import DashboardTeamCard from "@/components/Dashboard/DashboardTeamCard.vue";

import { Glide, GlideSlide } from "vue-glide-js";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardDeleteImgPopup,
    InvestorsCard,
    DashboardTeamCard,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      tabs: ["Português", "Inglês"],
      currentTab: 0,
      edit: {
        title: "",
        initials: "",
        reference: "",
        number: "",
        email: "",
        startDate: "",
        endDate: "",
        contentPt: "",
        contentEn: "",
        resumePt: "",
        resumeEn: "",
        image: "",
        pdf: "",
        coordinator: ""
      },
      teamRows: [1],
      project: {
        name: "",
        contact: "",
        email: "",
        content: "",
        team: []
      },
      images: [],
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
  async created() {
    try {
      await this.$store.dispatch("setUsers");
    } catch (error) {
      return error;
    }

    this.project = this.getAdminProjectById(this.getAdminSelectedProjectId);

    console.log(this.getAdminProjectById(this.getAdminSelectedProjectId));

    this.edit.title = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).title;

    this.edit.initials = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).initials;

    this.edit.reference = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).reference;

    this.edit.number = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).project_contact;

    this.edit.email = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).project_email;

    this.edit.startDate = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).start_date;

    this.edit.endDate = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).end_date;

    this.edit.contentPt = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).desc_html_structure_pt;

    this.edit.contentEn = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).desc_html_structure_eng;

    this.edit.resumeEn = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).summary_eng;

    this.edit.resumePt = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).summary_pt;

    this.edit.coordinator = this.getAdminProjectById(
      this.getAdminSelectedProjectId
    ).coordinator;

    // THE NEXT FOLLOWING LINE IS JUST FOR TESTING REASONS
    this.images = [
      "https://wp.zillowstatic.com/streeteasy/2/Amazon-building-10b3c7.jpg",
      "https://www.gannett-cdn.com/presto/2019/07/18/PSAL/4010fe7f-35e9-4108-9954-96f6f521bab1-AmazonFulfillmentCenter_ar_01.JPG?auto=webp&crop=2399,1349,x1,y86&format=pjpg&width=1200",
      "https://www.gannett-cdn.com/presto/2019/07/18/PSAL/4010fe7f-35e9-4108-9954-96f6f521bab1-AmazonFulfillmentCenter_ar_01.JPG?auto=webp&crop=2399,1349,x1,y86&format=pjpg&width=1200",
      "https://wp.zillowstatic.com/streeteasy/2/Amazon-building-10b3c7.jpg",
      "https://www.gannett-cdn.com/presto/2019/07/18/PSAL/4010fe7f-35e9-4108-9954-96f6f521bab1-AmazonFulfillmentCenter_ar_01.JPG?auto=webp&crop=2399,1349,x1,y86&format=pjpg&width=1200",
      "https://www.gannett-cdn.com/presto/2019/07/18/PSAL/4010fe7f-35e9-4108-9954-96f6f521bab1-AmazonFulfillmentCenter_ar_01.JPG?auto=webp&crop=2399,1349,x1,y86&format=pjpg&width=1200"
    ];
  },
  computed: {
    ...mapGetters(["getAdminSelectedProjectId", "getAdminProjectById"]),
    teamRowsLength() {
      let length = this.teamRows.length;

      return length;
    },
    imagesArrLength() {
      let images = this.getAdminProjectById(this.getAdminSelectedProjectId)
        .gallery_imgs;
      let length;

      if (images) {
        length = images.length;
      }

      return length;
    },
    getImages() {
      console.log(
        this.getAdminProjectById(this.getAdminSelectedProjectId).gallery_imgs
      );
      return this.getAdminProjectById(this.getAdminSelectedProjectId)
        .gallery_imgs;
    },
    getInvestors() {
      return this.getAdminProjectById(this.getAdminSelectedProjectId)
        .outside_investors;
    },
    getUsers() {
      return this.getAdminProjectById(this.getAdminSelectedProjectId)
        .project_team;
    }
    // getInvestors() {
    //   let project = this.getAdminProjectById(this.getAdminSelectedProjectId)
    //   this.setPartnersArr(project. ,project.outside_investors)
    //   return this.getAdminProjectById(this.getAdminSelectedProjectId)
    //     .gallery_imgs;
    // }
  },
  methods: {
    async editProject() {
      this.$store.commit("SET_PROJECTS_EDIT_FORM", {
        title: this.edit.title,
        initials: this.edit.initials,
        reference: this.edit.reference,
        desc_html_structure_eng: this.edit.contentEn,
        desc_html_structure_pt: this.edit.contentPt,
        summary_eng: this.edit.resumeEn,
        summary_pt: this.edit.resumePt,
        project_contact: this.edit.number,
        project_email: this.edit.email,
        start_date: this.edit.startDate,
        end_date: this.edit.endDate,
        coordinator: this.edit.coordinator
      });

      try {
        await this.$store.dispatch("setAdminEditProjects");
        await this.$store.dispatch("setAdminProjects");

        if (this.$store.getters.getEditProjectStatus === 200)
          this.notificationSuccess();
        else this.notificationError();
      } catch (error) {
        return error;
      }

      this.goBack();
    },
    async editPdf() {
      this.$store.commit("SET_PROJECTS_EDIT_FORM", {
        pdf_path: this.edit.pdf
      });

      console.log(this.edit.pdf);

      try {
        await this.$store.dispatch("setAdminEditProjectPdf");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        return error;
      }
    },
    setPartnersArr(internals, externals) {
      return [...internals, ...externals];
    },
    openEditFilePopup() {},
    styleEditorHeight() {
      let height = document.querySelector(".area_edit_editor").offsetHeight;

      let toolbar = document.querySelector(".ql-toolbar");
      let editor = document.querySelector(".ql-editor");

      editor.style.height += `${height - toolbar.offsetHeight}px`;
    },
    uploadPdf(e) {
      const pdf = e.target.files[0];
      this.edit.pdf = pdf;
    },
    imageStyle(image) {
      return `background-image: url('${image}')`;
    },
    goBack() {
      this.$router.push({
        name: "DashboardProjects"
      });
    },
    notificationSuccess() {
      this.$toast.success("Projeto editado com sucesso!", {
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
    },
    closePopup3() {
      let overlay = document.querySelector(".admin_projects__panel__overlay3");
      let popup = document.querySelector(".delete_img");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    openEditPopup(id) {
      let overlay = document.querySelector(".admin_projects__panel__overlay3");

      let popup = document.querySelector(".delete_img");

      console.log(overlay, popup);

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_DELETE_PROJECT_IMG", {
        id: id
      });
    }
    // addHtmlTeamRow(index) {
    //   console.log(index);

    //   this.teamRows.push(index + 1);
    // },
    // removeHtmlTeamRow(index) {
    //   this.teamRows = this.teamRows.filter(row => row !== index);
    // }
  }
};
</script>
