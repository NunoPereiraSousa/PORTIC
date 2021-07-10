<template>
  <div class="admin__entities flex">
    <DashboardHeader />

    <div class="admin__entities__panel">
      <DashboardTopHeader />

      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div>
          <h3>
            Editar entidade <span>{{ edit.designation }}</span>
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button" @click="editEntity">
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
              v-model="edit.designation"
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
            <label for="emailTxt">Email Principal</label><br />
            <input
              type="email"
              id="emailTxt"
              placeholder="E-mail principal"
              v-model="edit.main_email"
            />
          </div>
          <div>
            <label for="email2Txt">Email secundário</label><br />
            <input
              type="email"
              id="email2Txt"
              placeholder="E-mail secundário"
              v-model="edit.secondary_email"
            />
          </div>
          <div>
            <label for="numberTxt">Contacto telefónico</label><br />
            <input
              id="numberTxt"
              type="text"
              placeholder="Contacto telefónico"
              v-model="edit.main_contact"
            />
          </div>
          <div>
            <label for="linkedinUrl">URL Linkedin</label><br />
            <input
              id="linkedinUrl"
              type="url"
              placeholder="URL Linkedin"
              v-model="edit.linkedIn"
            />
          </div>
          <div>
            <label for="facebookUrl">URL Facebook</label><br />
            <input
              id="facebookUrl"
              type="url"
              placeholder="URL facebook"
              v-model="edit.facebook"
            />
          </div>
          <div>
            <label for="instagramUrl">URL Instagram</label><br />
            <input
              id="instagramUrl"
              type="url"
              placeholder="URL instagram"
              v-model="edit.instagram"
            />
          </div>
          <div>
            <label for="youtubeUrl">URL YouYube</label><br />
            <input
              id="youtubeUrl"
              type="url"
              placeholder="URL youtube"
              v-model="edit.youtube"
            />
          </div>
          <div>
            <label for="twitterUrl">URL Twitter</label><br />
            <input
              id="twitterUrl"
              type="url"
              placeholder="URL twitter"
              v-model="edit.twitter"
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
              v-model="edit.slogan_pt"
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
              v-model="edit.slogan_eng"
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
              v-model="edit.desc_html_pt"
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
              v-model="edit.desc_html_eng"
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
                v-model="edit.optional_course_menu"
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
                v-model="edit.optional_media_menu"
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
                v-model="edit.optional_project_menu"
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
                v-model="edit.optional_recruitment_menu"
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
              v-model="edit.color1"
            />
          </div>
          <div>
            <label for="color2">Cor 2</label><br />
            <input
              id="color2"
              type="color"
              value="#666666"
              style="padding: 0; width: 4rem;"
              v-model="edit.color2"
            />
          </div>
          <div>
            <label for="color3">Cor 3</label><br />
            <input
              id="color3"
              type="color"
              value="#999999"
              style="padding: 0; width: 4rem;"
              v-model="edit.color3"
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
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader
  },
  data: () => {
    return {
      edit: {
        designation: "",
        initials: "",
        desc_html_pt: "",
        desc_html_eng: "",
        slogan_eng: "",
        slogan_pt: "",
        color1: "",
        color2: "",
        color3: "",
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
  created() {
    console.log(this.getCurrentEntity);

    this.edit = {
      designation: this.getCurrentEntity.designation,
      initials: this.getCurrentEntity.initials,
      desc_html_pt: this.getCurrentEntity.desc_html_pt,
      desc_html_eng: this.getCurrentEntity.desc_html_eng,
      slogan_eng: this.getCurrentEntity.slogan_eng,
      slogan_pt: this.getCurrentEntity.slogan_pt,
      color1: this.formatColors(this.getCurrentEntity.colors)[0],
      color2: this.formatColors(this.getCurrentEntity.colors)[1],
      color3: this.formatColors(this.getCurrentEntity.colors)[2],
      main_email: this.getCurrentEntity.emails[0],
      secondary_email: this.getCurrentEntity.emails[1],
      main_contact: this.getCurrentEntity.contacts[0],
      linkedIn: this.getCurrentEntity.social_medias[2].url,
      facebook: this.getCurrentEntity.social_medias[0].url,
      instagram: this.getCurrentEntity.social_medias[1].url,
      youtube: this.getCurrentEntity.social_medias[4].url,
      twitter: this.getCurrentEntity.social_medias[3].url,
      optional_course_menu: this.getCurrentEntity.optional_course_menu,
      optional_project_menu: this.getCurrentEntity.optional_project_menu,
      optional_recruitment_menu: this.getCurrentEntity
        .optional_recruitment_menu,
      optional_media_menu: this.getCurrentEntity.optional_media_menu
    };

    console.log();
  },
  computed: {
    ...mapGetters(["getAdminEntityId", "getAdminEntityById"]),
    getCurrentEntity() {
      return this.getAdminEntityById(this.getAdminEntityId);
    }
  },
  methods: {
    async editEntity() {
      this.$store.commit("SET_EDIT_ENTITY_FORM", {
        designation: this.edit.designation,
        initials: this.edit.initials,
        desc_html_pt: this.edit.desc_html_pt,
        desc_html_eng: this.edit.desc_html_eng,
        slogan_eng: this.edit.slogan_eng,
        slogan_pt: this.edit.slogan_pt,
        colors: JSON.stringify([
          this.edit.color1,
          this.edit.color2,
          this.edit.color3
        ]),
        main_email: this.edit.main_email,
        secondary_email: this.edit.secondary_email,
        main_contact: this.edit.main_contact,
        linkedIn: this.edit.linkedIn,
        facebook: this.edit.facebook,
        instagram: this.edit.instagram,
        youtube: this.edit.youtube,
        twitter: this.edit.twitter,
        optional_course_menu:
          this.edit.optional_course_menu === "" ? false : true,
        optional_project_menu:
          this.edit.optional_project_menu === "" ? false : true,
        optional_recruitment_menu:
          this.edit.optional_recruitment_menu === "" ? false : true,
        optional_media_menu: this.edit.optional_media_menu === "" ? false : true
      });

      try {
        await this.$store.dispatch("setEditEntity");
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
    },
    formatColors(string) {
      return string
        .replace("[", "")
        .replace("]", "")
        .replace(",", " ")
        .replace(",", " ")
        .split(" ");
    }
  }
};
</script>
