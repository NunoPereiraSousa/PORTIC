import { iconCardsEN, iconCardsPT } from "../../config/areas";
import { areasConfig } from "../../config/api/areas";
import { entityModule } from "./entityModule";

export const areaModule = {
  state: {
    // areasPT: areasPT,
    // areasEN: areasEN,
    areas: [],
    dataStatus: "",
    lang: "pt",
    iconCardsPT: iconCardsPT,
    iconCardsEN: iconCardsEN,
    selectedId: null,
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_SELECTED_AREA_ID(state, payload) {
      state.selectedId = payload.id;
    },
    SET_AREAS(state, payload) {
      state.areas = payload.areas;
      state.dataStatus = payload.status;
    },
    SET_SELECTED_AREAS_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setAreas({ commit, state }) {
      commit(
        "SET_AREAS",
        await areasConfig.getAreas(
          state.dataBody.selectedLang,
          entityModule.state.entityId
        )
      );
    }
  },
  getters: {
    getAreas: state => {
      return state.areas != "" ? state.areas : [];
    },
    getNAreas: state => {
      return state.areas != ""
        ? state.areas.length != undefined
          ? state.areas.length
          : 0
        : 0;
    },
    getIconCardsPT: state => state.iconCardsPT,
    getIconCardsEN: state => state.iconCardsEN,
    getSelectedAreaByID: state => state.selectedId,
    getAreaByID: state => id => state.areas.find(n => n.id == id)
  }
};
