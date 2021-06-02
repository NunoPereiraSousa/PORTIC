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
    }
  },
  actions: {
    async setData(state) {
      state.state.dataBody.selectedLang = state.state.lang;

      state.commit(
        "SET_DATA",
        await entityConfig.getEntityData(state.state.dataBody.selectedLang)
      );
    }
  },
  getters: {
    getEntityData: state => {
      return state.data != "" ? state.data : "Carregar...";
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
