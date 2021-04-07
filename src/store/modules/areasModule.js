import { areas, iconCards } from "../../config/areas";

export const areaModule = {
  state: {
    areas: areas,
    iconCards: iconCards
  },
  mutations: {},
  actions: {},
  getters: {
    getAreas: state => state.areas,
    getNAreas: state => state.areas.length,
    getIconCards: state => state.iconCards
  }
};
