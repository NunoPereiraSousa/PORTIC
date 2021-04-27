import { areasEN, areasPT, iconCards } from "../../config/areas";

export const areaModule = {
  state: {
    areasPT: areasPT,
    areasEN: areasEN,
    iconCards: iconCards
  },
  mutations: {},
  actions: {},
  getters: {
    getAreasPT: state => state.areasPT,
    getAreasEN: state => state.areasEN,
    getNAreas: state => state.areasPT.length,
    getIconCards: state => state.iconCards
  }
};
