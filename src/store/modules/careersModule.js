import { tipsEN, tipsPT } from "../../config/recruitment";
import { careersConfig } from "../../config/api/careers";
import { entityModule } from "./entityModule";

export const careersModule = {
  state: {
    careers: [],
    tipsPT: tipsPT,
    tipsEN: tipsEN,
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

      console.log(state.careers);
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
    getPositions: state => state.careers,
    getNPositions: state => state.careers.length,
    getPositionsNames: state => state.careers.map(career => career.categories),
    getTipsPT: state => state.tipsPT,
    getTipsEN: state => state.tipsEN,
    getSelectedCareerByID: state => state.selectedId,
    getCareerByID: state => id => state.careers.find(career => career.id === id)
  }
};
