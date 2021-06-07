import { entityConfig } from "../../config/api/entity";

export const entityModule = {
  state: {
    lang: "pt",
    data: [],
    dataStatus: "",
    dataBody: {
      selectedLang: ""
    },
    entityId: ""
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
    }
  },
  getters: {
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
      return state.data.social_medias;
    },
    getEntityMenus: state => {
      return state.data.menus;
    },
    getEntitySlogan: state => {
      return state.data != "" ? state.data.designation : "Carregar...";
    },
    getEntityDataStatus: state => state.dataStatus
  }
};
