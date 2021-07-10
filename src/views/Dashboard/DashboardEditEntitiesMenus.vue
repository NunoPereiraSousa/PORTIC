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
          <button class="edit_cancel_button" @click="goBack">
            Cancelar
          </button>
        </div>
      </div>

      <div class="admin_actions_panel__form projects_panel__form">
        <div class="flex flex-ai-c flex-jc-sb">
          <h3 class="dashboard_subheader">
            Menu Sobre nós
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editContactsMenu"
          >
            Confirmar
          </button>
        </div>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="contactsTxt">Menu PT</label><br />
            <input
              id="contactsTxt"
              type="text"
              placeholder="Menu pt"
              v-model="contacts.designation_pt"
            />
          </div>
          <div>
            <label for="contacts2Txt">Menu ENG</label><br />
            <input
              id="contacts2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="contacts.designation_eng"
            />
          </div>
          <!-- <div>
            <label for="contactsDescTxt">Desc PT</label><br />
            <textarea
              id="contactsDescTxt"
              cols="30"
              rows="10"
              v-model="contacts.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="contactsDesc2Txt">Desc ENG</label><br />
            <textarea
              id="contactsDesc2Txt"
              cols="30"
              rows="10"
              v-model="contacts.page_description_eng"
            ></textarea>
          </div> -->
        </div>

        <!-- <h3 class="dashboard_subheader">
          Menu Áreas
        </h3>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="areasTxt">Menu PT</label><br />
            <input
              id="areasTxt"
              type="text"
              placeholder="Menu pt"
              v-model="areas.designation_pt"
            />
          </div>
          <div>
            <label for="areas2Txt">Menu ENG</label><br />
            <input
              id="areas2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="areas.designation_eng"
            />
          </div>
          <div>
            <label for="areasDescTxt">Desc PT</label><br />
            <textarea
              id="areasDescTxt"
              cols="30"
              rows="10"
              v-model="areas.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="areasDesc2Txt">Desc ENG</label><br />
            <textarea
              id="areasDesc2Txt"
              cols="30"
              rows="10"
              v-model="areas.page_description_eng"
            ></textarea>
          </div>
        </div> -->

        <div class="flex flex-ai-c flex-jc-sb">
          <h3 class="dashboard_subheader">
            Menu Cursos
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editCoursesMenu"
          >
            Confirmar
          </button>
        </div>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="coursesTxt">Menu PT</label><br />
            <input
              id="coursesTxt"
              type="text"
              placeholder="Menu pt"
              v-model="courses.designation_pt"
            />
          </div>
          <div>
            <label for="courses2Txt">Menu ENG</label><br />
            <input
              id="courses2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="courses.designation_eng"
            />
          </div>
          <div>
            <label for="coursesDescTxt">Desc PT</label><br />
            <textarea
              id="coursesDescTxt"
              cols="30"
              rows="10"
              v-model="courses.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="coursesDesc2Txt">Desc ENG</label><br />
            <textarea
              id="coursesDesc2Txt"
              cols="30"
              rows="10"
              v-model="courses.page_description_eng"
            ></textarea>
          </div>
        </div>

        <div class="flex flex-ai-c flex-jc-sb">
          <h3 class="dashboard_subheader">
            Menu Entidades
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editEntitiesMenu"
          >
            Confirmar
          </button>
        </div>
        <div
          class="projects_panel__form__inputs flex"
          v-if="getCurrentEntity.id_entity === 'u3uyjgsfkqy5qwe8_Entity'"
        >
          <div>
            <label for="entitiesTxt">Menu PT</label><br />
            <input
              id="entitiesTxt"
              type="text"
              placeholder="Menu pt"
              v-model="entities.designation_pt"
            />
          </div>
          <div>
            <label for="entities2Txt">Menu ENG</label><br />
            <input
              id="entities2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="entities.designation_eng"
            />
          </div>
          <!-- <div>
            <label for="entitiesDescTxt">Desc PT</label><br />
            <textarea
              id="entitiesDescTxt"
              cols="30"
              rows="10"
              v-model="entities.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="entitiesDesc2Txt">Desc ENG</label><br />
            <textarea
              id="entitiesDesc2Txt"
              cols="30"
              rows="10"
              v-model="entities.page_description_eng"
            ></textarea>
          </div> -->
        </div>

        <div class="flex flex-ai-c flex-jc-sb">
          <h3 class="dashboard_subheader">
            Menu Media
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editMediaMenu"
          >
            Confirmar
          </button>
        </div>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="mediasTxt">Menu PT</label><br />
            <input
              id="mediasTxt"
              type="text"
              placeholder="Menu pt"
              v-model="media.designation_pt"
            />
          </div>
          <div>
            <label for="medias2Txt">Menu ENG</label><br />
            <input
              id="medias2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="media.designation_eng"
            />
          </div>
          <div>
            <label for="mediasDescTxt">Desc PT</label><br />
            <textarea
              id="mediasDescTxt"
              cols="30"
              rows="10"
              v-model="media.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="mediasDesc2Txt">Desc ENG</label><br />
            <textarea
              id="mediasDesc2Txt"
              cols="30"
              rows="10"
              v-model="media.page_description_eng"
            ></textarea>
          </div>
        </div>

        <div class="flex flex-ai-c flex-jc-sb">
          <h3 class="dashboard_subheader">
            Menu Projetos
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editProjectsMenu"
          >
            Confirmar
          </button>
        </div>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="projectsTxt">Menu PT</label><br />
            <input
              id="projectsTxt"
              type="text"
              placeholder="Menu pt"
              v-model="projects.designation_pt"
            />
          </div>
          <div>
            <label for="projects2Txt">Menu ENG</label><br />
            <input
              id="projects2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="projects.designation_eng"
            />
          </div>
          <!-- <div>
            <label for="projectsDescTxt">Desc PT</label><br />
            <textarea
              id="projectsDescTxt"
              cols="30"
              rows="10"
              v-model="projects.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="projectsDesc2Txt">Desc ENG</label><br />
            <textarea
              id="projectsDesc2Txt"
              cols="30"
              rows="10"
              v-model="projects.page_description_eng"
            ></textarea>
          </div> -->
        </div>
        <div class="flex flex-ai-c flex-jc-sb">
          <h3 class="dashboard_subheader">
            Menu Recrutamento
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editCareersMenu"
          >
            Confirmar
          </button>
        </div>

        <div class="projects_panel__form__inputs flex">
          <div>
            <label for="careersTxt">Menu PT</label><br />
            <input
              id="careersTxt"
              type="text"
              placeholder="Menu pt"
              v-model="careers.designation_pt"
            />
          </div>
          <div>
            <label for="careers2Txt">Menu ENG</label><br />
            <input
              id="careers2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="careers.designation_eng"
            />
          </div>
          <div>
            <label for="careersDescTxt">Desc PT</label><br />
            <textarea
              id="careersDescTxt"
              cols="30"
              rows="10"
              v-model="careers.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="careersDesc2Txt">Desc ENG</label><br />
            <textarea
              id="careersDesc2Txt"
              cols="30"
              rows="10"
              v-model="careers.page_description_eng"
            ></textarea>
          </div>
        </div>

        <div class="flex flex-ai-c flex-jc-sb">
          <h3
            class="dashboard_subheader"
            v-if="getCurrentEntity.id_entity === 'u3uyjgsfkqy5qwe8_Entity'"
          >
            Menu Unidades
          </h3>

          <button
            class="edit_confirm_button"
            style="height: fit-content;"
            @click="editUnitsMenu"
          >
            Confirmar
          </button>
        </div>

        <div
          class="projects_panel__form__inputs flex"
          v-if="getCurrentEntity.id_entity === 'u3uyjgsfkqy5qwe8_Entity'"
        >
          <div>
            <label for="unitsTxt">Menu PT</label><br />
            <input
              id="unitsTxt"
              type="text"
              placeholder="Menu pt"
              v-model="units.designation_pt"
            />
          </div>
          <div>
            <label for="units2Txt">Menu ENG</label><br />
            <input
              id="units2Txt"
              type="text"
              placeholder="Menu eng"
              v-model="units.designation_eng"
            />
          </div>
          <div>
            <label for="unitsDescTxt">Desc PT</label><br />
            <textarea
              id="unitsDescTxt"
              cols="30"
              rows="10"
              v-model="units.page_description_pt"
            ></textarea>
          </div>
          <div>
            <label for="unitsDesc2Txt">Desc ENG</label><br />
            <textarea
              id="unitsDesc2Txt"
              cols="30"
              rows="10"
              v-model="units.page_description_eng"
            ></textarea>
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
      menu: {},
      imgName: "",
      areas: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      careers: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      courses: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      contacts: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      entities: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      media: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      projects: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      },
      units: {
        designation_pt: "",
        designation_eng: "",
        page_description_eng: "",
        page_description_pt: ""
      }
    };
  },
  created() {
    console.log(this.getAdminEntityById(this.getAdminEntityId));

    if (this.getCurrentEntity.id_entity !== "u3uyjgsfkqy5qwe8_Entity") {
      this.careers = {
        designation_pt: this.getCurrentEntity.menus[4].designation_pt,
        designation_eng: this.getCurrentEntity.menus[4].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[4]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[4].page_description_pt
      };

      this.courses = {
        designation_pt: this.getCurrentEntity.menus[1].designation_pt,
        designation_eng: this.getCurrentEntity.menus[1].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[1]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[1].page_description_pt
      };

      this.contacts = {
        designation_pt: this.getCurrentEntity.menus[0].designation_pt,
        designation_eng: this.getCurrentEntity.menus[0].designation_eng
        // page_description_eng: this.getCurrentEntity
        //   .menus[0].page_description_eng,
        // page_description_pt: this.getCurrentEntity
        //   .menus[0].page_description_pt
      };

      this.media = {
        designation_pt: this.getCurrentEntity.menus[3].designation_pt,
        designation_eng: this.getCurrentEntity.menus[3].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[3]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[3].page_description_pt
      };

      this.projects = {
        designation_pt: this.getCurrentEntity.menus[2].designation_pt,
        designation_eng: this.getCurrentEntity.menus[2].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[2]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[2].page_description_pt
      };
    } else {
      this.careers = {
        designation_pt: this.getCurrentEntity.menus[5].designation_pt,
        designation_eng: this.getCurrentEntity.menus[5].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[5]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[5].page_description_pt
      };

      this.courses = {
        designation_pt: this.getCurrentEntity.menus[2].designation_pt,
        designation_eng: this.getCurrentEntity.menus[2].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[2]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[2].page_description_pt
      };

      this.contacts = {
        designation_pt: this.getCurrentEntity.menus[0].designation_pt,
        designation_eng: this.getCurrentEntity.menus[0].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[0]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[0].page_description_pt
      };

      this.entities = {
        designation_pt: this.getCurrentEntity.menus[7].designation_pt,
        designation_eng: this.getCurrentEntity.menus[7].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[7]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[7].page_description_pt
      };

      this.media = {
        designation_pt: this.getCurrentEntity.menus[4].designation_pt,
        designation_eng: this.getCurrentEntity.menus[4].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[4]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[4].page_description_pt
      };

      this.projects = {
        designation_pt: this.getCurrentEntity.menus[3].designation_pt,
        designation_eng: this.getCurrentEntity.menus[3].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[3]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[3].page_description_pt
      };

      this.units = {
        designation_pt: this.getCurrentEntity.menus[1].designation_pt,
        designation_eng: this.getCurrentEntity.menus[1].designation_eng,
        page_description_eng: this.getCurrentEntity.menus[1]
          .page_description_eng,
        page_description_pt: this.getCurrentEntity.menus[1].page_description_pt
      };
    }
  },
  computed: {
    ...mapGetters([
      "getAdminEntityById",
      "getAdminEntityId",
      "getEditEntityMenuStatus"
    ]),
    getCurrentEntity() {
      return this.getAdminEntityById(this.getAdminEntityId);
    }
  },
  methods: {
    async editContactsMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id: this.getCurrentEntity.menus[0].id_menu,
        designation_pt: this.contacts.designation_pt,
        designation_eng: this.contacts.designation_eng,
        page_description_eng: "Descrição",
        page_description_pt: "Description"
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    async editCoursesMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id:
          this.checkUnitId() === 0
            ? this.getCurrentEntity.menus[1].id_menu
            : this.getCurrentEntity.menus[2].id_menu,
        designation_pt: this.courses.designation_pt,
        designation_eng: this.courses.designation_eng,
        page_description_eng: this.courses.page_description_eng,
        page_description_pt: this.courses.page_description_pt
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    async editCareersMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id:
          this.checkUnitId() === 0
            ? this.getCurrentEntity.menus[4].id_menu
            : this.getCurrentEntity.menus[5].id_menu,
        designation_pt: this.careers.designation_pt,
        designation_eng: this.careers.designation_eng,
        page_description_eng: this.careers.page_description_eng,
        page_description_pt: this.careers.page_description_pt
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    async editEntitiesMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id: this.getCurrentEntity.menus[7].id_menu,
        designation_pt: this.entities.designation_pt,
        designation_eng: this.entities.designation_eng,
        page_description_eng: "Descrição",
        page_description_pt: "Description"
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    async editMediaMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id:
          this.checkUnitId() === 0
            ? this.getCurrentEntity.menus[3].id_menu
            : this.getCurrentEntity.menus[4].id_menu,
        designation_pt: this.media.designation_pt,
        designation_eng: this.media.designation_eng,
        page_description_eng: this.media.page_description_eng,
        page_description_pt: this.media.page_description_pt
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    async editProjectsMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id:
          this.checkUnitId() === 0
            ? this.getCurrentEntity.menus[2].id_menu
            : this.getCurrentEntity.menus[3].id_menu,
        designation_pt: this.projects.designation_pt,
        designation_eng: this.projects.designation_eng,
        page_description_eng: "Descrição",
        page_description_pt: "Description"
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    async editUnitsMenu() {
      this.$store.commit("SET_ENTITIES_MENU_FORM", {
        id: this.getCurrentEntity.menus[1].id_menu,
        designation_pt: this.units.designation_pt,
        designation_eng: this.units.designation_eng,
        page_description_eng: this.units.page_description_eng,
        page_description_pt: this.units.page_description_pt
      });

      try {
        await this.$store.dispatch("setAdminEditEntityMenu");
        await this.$store.dispatch("setAdminEntities");

        if (this.getEditEntityMenuStatus === 200) this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }
    },
    goBack() {
      this.$router.push({
        name: "DashboardEntities"
      });
    },
    checkUnitId() {
      if (this.getCurrentEntity.id_entity === "u3uyjgsfkqy5qwe8_Entity")
        return 1;
      return 0;
    },
    notificationSuccess() {
      this.$toast.success("Menu editado com sucesso!", {
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
