<template>
  <div class="admin__entities flex">
    <DashboardHeader />

    <div class="admin__entities__panel">
      <DashboardTopHeader />

      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div>
          <h3>
            Adicionar entidade
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="addEntity">
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
              placeholder="Título da entidade"
              v-model="add.designation"
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
            <label for="emailTxt">Email Principal</label><br />
            <input
              type="email"
              id="emailTxt"
              placeholder="E-mail principal"
              v-model="add.main_email"
            />
          </div>
          <div>
            <label for="email2Txt">Email secundário</label><br />
            <input
              type="email"
              id="email2Txt"
              placeholder="E-mail secundário"
              v-model="add.secondary_email"
            />
          </div>
          <div>
            <label for="numberTxt">Contacto telefónico</label><br />
            <input
              id="numberTxt"
              type="text"
              max="9"
              placeholder="Contacto telefónico"
              v-model="add.main_contact"
            />
          </div>
          <div>
            <label for="linkedinUrl">URL Linkedin</label><br />
            <input
              id="linkedinUrl"
              type="url"
              placeholder="URL Linkedin"
              v-model="add.linkedIn"
            />
          </div>
          <div>
            <label for="facebookUrl">URL Facebook</label><br />
            <input
              id="facebookUrl"
              type="url"
              placeholder="URL facebook"
              v-model="add.facebook"
            />
          </div>
          <div>
            <label for="instagramUrl">URL Instagram</label><br />
            <input
              id="instagramUrl"
              type="url"
              placeholder="URL instagram"
              v-model="add.instagram"
            />
          </div>
          <div>
            <label for="youtubeUrl">URL YouYube</label><br />
            <input
              id="youtubeUrl"
              type="url"
              placeholder="URL youtube"
              v-model="add.youtube"
            />
          </div>
          <div>
            <label for="twitterUrl">URL Twitter</label><br />
            <input
              id="twitterUrl"
              type="url"
              placeholder="URL twitter"
              v-model="add.twitter"
            />
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Descrições e slogans
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="sloganPt">Slogan PT</label><br />
            <textarea
              id="sloganPt"
              type="text"
              placeholder="Slogan em Português"
              cols="30"
              rows="4"
              v-model="add.slogan_pt"
            ></textarea>
          </div>
          <div>
            <label for="sloganEn">Slogan ENG</label><br />
            <textarea
              id="sloganEn"
              type="text"
              placeholder="Slogan em Inglês"
              cols="30"
              rows="4"
              v-model="add.slogan_eng"
            ></textarea>
          </div>
          <div>
            <label for="descriptionPt">Descrição PT</label><br />
            <textarea
              id="descriptionPt"
              type="text"
              placeholder="Descrição em Português"
              cols="30"
              rows="8"
              v-model="add.desc_html_pt"
            ></textarea>
          </div>
          <div>
            <label for="descriptionEn">Descrição ENG</label><br />
            <textarea
              id="descriptionEn"
              type="text"
              placeholder="Descrição em Inglês"
              cols="30"
              rows="8"
              v-model="add.desc_html_eng"
            ></textarea>
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Menus
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div style="margin-bottom: 2">
            <div class="flex flex-ai-c">
              <input
                type="checkbox"
                id="course"
                name="course"
                value="1"
                style="margin: 0 1rem 0 0;"
                v-model="add.optional_course_menu"
              />
              <label for="course">Menu cursos</label>
            </div>
            <div class="flex flex-ai-c">
              <input
                type="checkbox"
                id="media"
                name="media"
                value="1"
                style="margin: 0 1rem 0 0;"
                v-model="add.optional_media_menu"
              />
              <label for="media">Menu medias</label>
            </div>
            <div class="flex flex-ai-c">
              <input
                type="checkbox"
                id="project"
                name="project"
                value="1"
                style="margin: 0 1rem 0 0;"
                v-model="add.optional_project_menu"
              />
              <label for="project">Menu projetos</label>
            </div>
            <div class="flex flex-ai-c">
              <input
                type="checkbox"
                id="careers"
                name="careers"
                value="1"
                style="margin: 0 1rem 0 0;"
                v-model="add.optional_recruitment_menu"
              />
              <label for="careers">Menu recrutamento</label>
            </div>
          </div>
        </div>

        <h3 class="dashboard_subheader">
          Cores
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="color1">Cor 1</label><br />
            <input
              id="color1"
              type="color"
              value="#c94d24"
              style="padding: 0; width: 4rem;"
              v-model="add.color1"
            />
          </div>
          <div>
            <label for="color2">Cor 2</label><br />
            <input
              id="color2"
              type="color"
              value="#666666"
              style="padding: 0; width: 4rem;"
              v-model="add.color2"
            />
          </div>
          <div>
            <label for="color3">Cor 3</label><br />
            <input
              id="color3"
              type="color"
              value="#999999"
              style="padding: 0; width: 4rem;"
              v-model="add.color3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader
  },
  data: () => {
    return {
      add: {
        designation: "",
        initials: "",
        desc_html_pt: "",
        desc_html_eng: "",
        slogan_eng: "",
        slogan_pt: "",
        colors: [],
        main_email: "",
        secondary_email: "",
        main_contact: "",
        linkedIn: "",
        facebook: "",
        instagram: "",
        youtube: "",
        twitter: "",
        optional_course_menu: "",
        optional_project_menu: "",
        optional_recruitment_menu: "",
        optional_media_menu: ""
      }
    };
  },
  methods: {
    async addEntity() {
      this.$store.commit("SET_ADD_ENTITY_FORM", {
        designation: this.add.designation,
        initials: this.add.initials,
        desc_html_pt: this.add.desc_html_pt,
        desc_html_eng: this.add.desc_html_eng,
        slogan_eng: this.add.slogan_eng,
        slogan_pt: this.add.slogan_pt,
        colors: JSON.stringify([
          this.add.color1,
          this.add.color2,
          this.add.color3
        ]),
        main_email: this.add.main_email,
        secondary_email: this.add.secondary_email,
        main_contact: this.add.main_contact,
        linkedIn: this.add.linkedIn,
        facebook: this.add.facebook,
        instagram: this.add.instagram,
        youtube: this.add.youtube,
        twitter: this.add.twitter,
        optional_course_menu:
          this.add.optional_course_menu === "" ? false : true,
        optional_project_menu:
          this.add.optional_project_menu === "" ? false : true,
        optional_recruitment_menu:
          this.add.optional_recruitment_menu === "" ? false : true,
        optional_media_menu: this.add.optional_media_menu === "" ? false : true
      });

      try {
        await this.$store.dispatch("setAddEntity");
        await this.$store.dispatch("setAdminEntities");
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    goBack() {
      this.$router.push({
        name: "DashboardEntities"
      });
    }
  }
};
</script>
