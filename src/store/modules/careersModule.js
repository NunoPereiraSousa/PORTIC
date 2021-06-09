import { careersConfig } from "../../config/api/careers";
import { entityModule } from "./entityModule";

export const careersModule = {
  state: {
    careers: [],
    tips: [],
    selectedId: null,
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_SELECTED_CAREER_ID(state, payload) {
      state.selectedId = payload.id;
    },
    SET_CAREERS(state, payload) {
      state.careers = payload.careers;
    },
    SET_CAREER_TIPS(state, payload) {
      state.tips = payload.tips;
    },
    SET_SELECTED_CAREERS_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setCareers({ commit, state }) {
      commit(
        "SET_CAREERS",
        await careersConfig.getCareers(
          state.dataBody.selectedLang,
          entityModule.state.entityId
        )
      );
    },
    async setCareerTips({ commit, state }) {
      commit(
        "SET_CAREER_TIPS",
        await careersConfig.getCareerTips(
          state.dataBody.selectedLang,
          entityModule.state.entityId
        )
      );
    }
  },
  getters: {
    getCareers: state => {
      return state.careers != "" ? state.careers : [];
    },
    getCareersLength: state => {
      return state.careers != ""
        ? state.careers.length != undefined
          ? state.careers.length
          : 0
        : 0;
    },
    getCareerTips: state => {
      return state.tips != "" ? state.tips : [];
    },
    getPositions: state => state.careers,
    getNPositions: state => state.careers.length,
    getPositionsNames: state => state.careers.map(career => career.categories),
    getSelectedCareerByID: state => state.selectedId,
    getCareerByID: state => id =>
      state.careers.find(career => career.id_available_position === id)
  }
};
