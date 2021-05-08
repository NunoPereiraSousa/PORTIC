import { areasEN, areasPT, iconCardsEN, iconCardsPT } from "../../config/areas";

export const areaModule = {
  state: {
    areasPT: areasPT,
    areasEN: areasEN,
    iconCardsPT: iconCardsPT,
    iconCardsEN: iconCardsEN,
    selectedId: null
  },
  mutations: {
    SET_SELECTED_AREA_ID(state, payload) {
      state.selectedId = payload.id;
    }
  },
  actions: {},
  getters: {
    getAreasPT: state => state.areasPT,
    getAreasEN: state => state.areasEN,
    getNAreas: state => state.areasPT.length,
    getIconCardsPT: state => state.iconCardsPT,
    getIconCardsEN: state => state.iconCardsEN,
    getSelectedAreaByID: state => state.selectedId,
    getAreaByID: state => id => state.areasPT.find(n => n.id == id)
  }
};
