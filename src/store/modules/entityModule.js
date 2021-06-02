import { entityConfig } from "../../config/api/entity";

export const entityModule = {
  state: {
    lang: "pt",
    data: [],
    dataStatus: "",
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload.data;
      state.dataStatus = payload.status;
    },
    SET_SELECTED_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;

      console.log(`LANG: ${state.dataBody.selectedLang}`);
    }
  },
  actions: {
    async setData({ commit, state }) {
      // state.dataBody.selectedLang = state.lang;

      console.log(`STATE LANG: ${state.dataBody.selectedLang}`);

      commit(
        "SET_DATA",
        await entityConfig.getEntityData(state.dataBody.selectedLang)
      );
    }
  },
  getters: {
    getEntityData: state => {
      return state.data != "" ? state.data : "Carregar...";
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
    getEntityPhoneNumber: state => {
      return state.data != "" ? state.data.contacts[0].number : "Carregar...";
    },
    getEntityEmail: state => {
      return state.data != "" ? state.data.emails[0].email : "Carregar...";
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
