import { entityConfig } from "../../config/api/entity";

export const entityModule = {
  state: {
    lang: "pt",
    data: [],
    dataStatus: "",
    dataBody: {
      selectedLang: ""
    },
    entityId: "",
    focuses: [],
    menus: [],
    selectedMenuId: null
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload.data;
      state.dataStatus = payload.status;
    },
    SET_ENTITY_ID(state, payload) {
      state.entityId = payload.entity_id;
    },
    SET_SELECTED_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    },
    SET_ENTITY_FOCUSES(state, payload) {
      state.focuses = payload.focuses;
    },
    SET_MENUS(state, payload) {
      state.menus = payload.menus;
    },
    SET_SELECTED_MENU(state, payload) {
      state.selectedMenuId = payload.id;
    }
  },
  actions: {
    async setEntityId({ commit }) {
      commit("SET_ENTITY_ID", await entityConfig.getEntityId());
    },
    async setData({ commit, state }) {
      commit(
        "SET_DATA",
        await entityConfig.getEntityData(
          state.dataBody.selectedLang,
          state.entityId
        )
      );
    },
    async setEntityFocuses({ commit, state }) {
      commit(
        "SET_ENTITY_FOCUSES",
        await entityConfig.getEntityFocuses(
          state.dataBody.selectedLang,
          state.entityId
        )
      );
    },
    async setMenus({ commit, state }) {
      commit(
        "SET_MENUS",
        await entityConfig.getEntitiesMenus(
          state.dataBody.selectedLang,
          state.entityId
        )
      );
    }
  },
  getters: {
    getSelectedLang: state => state.dataBody.selectedLang,
    getEntityId: state => state.entityId,
    getEntityStatus: state => state.dataStatus,
    getEntityData: state => {
      return state.data != "" ? state.data : [];
    },
    getEntityDataSliced: state => {
      return state.data != ""
        ? state.data.social_medias.slice(
            0,
            state.data.social_medias.length / 2 + 1
          )
        : [];
    },
    getEntityDataSliced2: state => {
      return state.data != ""
        ? state.data.social_medias.slice(
            state.data.social_medias.length / 2 + 1,
            state.data.length
          )
        : [];
    },
    getEntityImage: state => {
      return state.data != "" ? state.data.img.data : "";
    },
    getEntityPhoneNumber: state => {
      return state.data != "" ? state.data.contacts[0].number : "";
    },
    getEntityPhoneNumberLink: state => {
      let number = state.data != "" ? state.data.contacts[0].number : "";

      return number.slice(6).replace(/\s/g, "");
    },
    getEntityEmail: state => {
      return state.data != "" ? state.data.emails[0].email : "";
    },
    getEntitySocials: state => {
      return state.data.social_medias != "" ? state.data.social_medias : [];
    },
    getEntityMenus: state => {
      return state.data.menus;
    },
    getEntitySlogan: state => {
      return state.data != "" ? state.data.designation : "Carregar...";
    },
    getEntityFocuses: state => (state.focuses != "" ? state.focuses : []),
    getMenus: state => (state.menus != "" ? state.menus : ""),
    getMenuDescByMenuID: state => id =>
      state.menus.find(menu => menu.id_menu === id),
    getSelectedMenuID: state => state.selectedMenuId
  }
};
