import { areasEN, areasPT, iconCardsEN, iconCardsPT } from "../../config/areas";

export const areaModule = {
  state: {
    areasPT: areasPT,
    areasEN: areasEN,
    iconCardsPT: iconCardsPT,
    iconCardsEN: iconCardsEN
  },
  mutations: {},
  actions: {},
  getters: {
    getAreasPT: state => state.areasPT,
    getAreasEN: state => state.areasEN,
    getNAreas: state => state.areasPT.length,
    getIconCardsPT: state => state.iconCardsPT,
    getIconCardsEN: state => state.iconCardsEN
  }
};
