import { iconCardsEN, iconCardsPT } from "../../config/areas";
import { areasConfig } from "../../config/api/areas";
import { entityModule } from "./entityModule";

export const areaModule = {
  state: {
    // areasPT: areasPT,
    // areasEN: areasEN,
    areas: [],
    dataStatus: "",
    groups: [],
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
    SET_AREAS_GROUPS(state, payload) {
      state.groups = payload.groups;
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
    },
    async setAreasGroups({ commit, state }) {
      commit(
        "SET_AREAS_GROUPS",
        await areasConfig.getAreasGroups(
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
      return state.areas.length;
    },
    getAreasGroups: state => {
      return state.groups != "" ? state.groups : [];
    },
    getIconCardsPT: state => state.iconCardsPT,
    getIconCardsEN: state => state.iconCardsEN,
    getSelectedAreaByID: state => state.selectedId,
    getAreaByID: state => id => state.areas.find(n => n.id_area == id)
  }
};
