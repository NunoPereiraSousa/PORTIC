import { adminEntitiesConfig } from "../../config/api/adminEntities";

export const adminEntitiesModule = {
  state: {
    entities: [],
    selectedEntityId: null,
    initials: {},
    newUserEntity: null,
    newUserEntityStatus: null,
    addEntityForm: {
      designation: null,
      initials: null,
      desc_html_pt: null,
      desc_html_eng: null,
      slogan_eng: null,
      slogan_pt: null,
      colors: null,
      main_email: null,
      secondary_email: null,
      main_contact: null,
      linkedIn: null,
      facebook: null,
      instagram: null,
      youtube: null,
      twitter: null,
      optional_course_menu: null,
      optional_project_menu: null,
      optional_recruitment_menu: null,
      optional_media_menu: null
    },
    editEntityForm: {
      designation: null,
      initials: null,
      desc_html_pt: null,
      desc_html_eng: null,
      slogan_eng: null,
      slogan_pt: null,
      colors: null,
      main_email: null,
      secondary_email: null,
      main_contact: null,
      linkedIn: null,
      facebook: null,
      instagram: null,
      youtube: null,
      twitter: null,
      optional_course_menu: null,
      optional_project_menu: null,
      optional_recruitment_menu: null,
      optional_media_menu: null,
      file: null
    },
    editEntityStatus: null,
    editEntityImgStatus: null,
    entitiesMenu: {
      id: null,
      designation_pt: null,
      designation_eng: null,
      page_description_eng: null,
      page_description_pt: null
    },
    editEntityMenusStatus: null
  },
  mutations: {
    SET_ENTITIES(state, payload) {
      state.entities = payload.entities;
    },
    SET_SELECTED_ADMIN_ENTITY_ID(state, payload) {
      state.selectedEntityId = payload.id;

      console.log(state.selectedEntityId);
    },
    SET_ENTITY_INITIALS(state, payload) {
      state.initials = payload.initials;
    },
    SET_ADD_ENTITY_STATUS(state, payload) {
      state.addEntityStatus = payload.status;
    },
    SET_ADD_ENTITY_FORM(state, payload) {
      state.addEntityForm.designation = payload.designation;
      state.addEntityForm.initials = payload.initials;
      state.addEntityForm.desc_html_pt = payload.desc_html_pt;
      state.addEntityForm.desc_html_eng = payload.desc_html_eng;
      state.addEntityForm.slogan_eng = payload.slogan_eng;
      state.addEntityForm.slogan_pt = payload.slogan_pt;
      state.addEntityForm.colors = payload.colors;
      state.addEntityForm.main_email = payload.main_email;
      state.addEntityForm.secondary_email = payload.secondary_email;
      state.addEntityForm.main_contact = payload.main_contact;
      state.addEntityForm.linkedIn = payload.linkedIn;
      state.addEntityForm.facebook = payload.facebook;
      state.addEntityForm.instagram = payload.instagram;
      state.addEntityForm.youtube = payload.youtube;
      state.addEntityForm.twitter = payload.twitter;
      state.addEntityForm.optional_course_menu = payload.optional_course_menu;
      state.addEntityForm.optional_project_menu = payload.optional_project_menu;
      state.addEntityForm.optional_recruitment_menu =
        payload.optional_recruitment_menu;
      state.addEntityForm.optional_media_menu = payload.optional_media_menu;
      state.addEntityForm.file = payload.file;

      console.log(state.addEntityForm);
    },
    SET_EDIT_ENTITY_STATUS(state, payload) {
      state.editEntityStatus = payload.status;
    },
    SET_EDIT_ENTITY_FORM(state, payload) {
      state.editEntityForm.designation = payload.designation;
      state.editEntityForm.initials = payload.initials;
      state.editEntityForm.desc_html_pt = payload.desc_html_pt;
      state.editEntityForm.desc_html_eng = payload.desc_html_eng;
      state.editEntityForm.slogan_eng = payload.slogan_eng;
      state.editEntityForm.slogan_pt = payload.slogan_pt;
      state.editEntityForm.colors = payload.colors;
      state.editEntityForm.main_email = payload.main_email;
      state.editEntityForm.secondary_email = payload.secondary_email;
      state.editEntityForm.main_contact = payload.main_contact;
      state.editEntityForm.linkedIn = payload.linkedIn;
      state.editEntityForm.facebook = payload.facebook;
      state.editEntityForm.instagram = payload.instagram;
      state.editEntityForm.youtube = payload.youtube;
      state.editEntityForm.twitter = payload.twitter;
      state.editEntityForm.optional_course_menu = payload.optional_course_menu;
      state.editEntityForm.optional_project_menu =
        payload.optional_project_menu;
      state.editEntityForm.optional_recruitment_menu =
        payload.optional_recruitment_menu;
      state.editEntityForm.optional_media_menu = payload.optional_media_menu;
      state.editEntityForm.file = payload.file;

      console.log(state.editEntityForm);
    },
    SET_ENTITY_IMG_STATUS(state, payload) {
      state.editEntityImgStatus = payload.status;
    },
    SET_ENTITIES_MENU_FORM(state, payload) {
      state.entitiesMenu.id = payload.id;
      state.entitiesMenu.designation_pt = payload.designation_pt;
      state.entitiesMenu.designation_eng = payload.designation_eng;
      state.entitiesMenu.page_description_eng = payload.page_description_eng;
      state.entitiesMenu.page_description_pt = payload.page_description_pt;
    },
    SET_ENTITIES_MENU_FORM_STATUS(state, payload) {
      state.editEntityMenusStatus = payload.status;
    }
  },
  actions: {
    async setAdminEntities({ commit }) {
      commit(
        "SET_ENTITIES",
        await adminEntitiesConfig.getEntities(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setEntityInitials({ commit }) {
      commit(
        "SET_ENTITY_INITIALS",
        await adminEntitiesConfig.getEntitiesInitials(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAddEntity({ commit, state }) {
      commit(
        "SET_ADD_ENTITY_STATUS",
        await adminEntitiesConfig.addEntity(
          JSON.parse(localStorage.getItem("token")),
          state.addEntityForm.designation,
          state.addEntityForm.initials,
          state.addEntityForm.desc_html_pt,
          state.addEntityForm.desc_html_eng,
          state.addEntityForm.slogan_eng,
          state.addEntityForm.slogan_pt,
          state.addEntityForm.colors,
          state.addEntityForm.main_email,
          state.addEntityForm.secondary_email,
          state.addEntityForm.main_contact,
          state.addEntityForm.linkedIn,
          state.addEntityForm.facebook,
          state.addEntityForm.instagram,
          state.addEntityForm.youtube,
          state.addEntityForm.twitter,
          state.addEntityForm.optional_course_menu,
          state.addEntityForm.optional_project_menu,
          state.addEntityForm.optional_recruitment_menu,
          state.addEntityForm.optional_media_menu,
          state.addEntityForm.file
        )
      );
    },
    async setEditEntity({ commit, state }) {
      commit(
        "SET_EDIT_ENTITY_STATUS",
        await adminEntitiesConfig.editEntity(
          JSON.parse(localStorage.getItem("token")),
          state.selectedEntityId,
          state.editEntityForm.designation,
          state.editEntityForm.initials,
          state.editEntityForm.desc_html_pt,
          state.editEntityForm.desc_html_eng,
          state.editEntityForm.slogan_eng,
          state.editEntityForm.slogan_pt,
          state.editEntityForm.colors,
          state.editEntityForm.main_email,
          state.editEntityForm.secondary_email,
          state.editEntityForm.main_contact,
          state.editEntityForm.linkedIn,
          state.editEntityForm.facebook,
          state.editEntityForm.instagram,
          state.editEntityForm.youtube,
          state.editEntityForm.twitter,
          state.editEntityForm.optional_course_menu,
          state.editEntityForm.optional_project_menu,
          state.editEntityForm.optional_recruitment_menu,
          state.editEntityForm.optional_media_menu
        )
      );
    },
    async setAdminEditEntityImg({ commit, state }) {
      commit(
        "SET_ENTITY_IMG_STATUS",
        await adminEntitiesConfig.editEntityImg(
          JSON.parse(localStorage.getItem("token")),
          state.selectedEntityId,
          state.editEntityForm.file
        )
      );
    },
    async setAdminEditEntityMenu({ commit, state }) {
      commit(
        "SET_ENTITIES_MENU_FORM_STATUS",
        await adminEntitiesConfig.editEntityMenu(
          JSON.parse(localStorage.getItem("token")),
          state.selectedEntityId,
          state.entitiesMenu.id,
          state.entitiesMenu.designation_pt,
          state.entitiesMenu.designation_eng,
          state.entitiesMenu.page_description_eng,
          state.entitiesMenu.page_description_pt
        )
      );
    }
  },
  getters: {
    getAdminEntities: state => (state.entities != "" ? state.entities : []),
    getAdminEntityId: state => state.selectedEntityId,
    getAdminEntityById: state => id =>
      state.entities.find(e => e.id_entity === id),
    getEntityInitials: state => (state.initials != "" ? state.initials : {}),
    getEditEntityMenuStatus: state => state.editEntityMenusStatus
  }
};
