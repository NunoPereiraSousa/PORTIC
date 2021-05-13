import { positions, tipsEN, tipsPT } from "../../config/recruitment";

export const recruitmentModule = {
  state: {
    positions: positions,
    tipsPT: tipsPT,
    tipsEN: tipsEN,
    selectedId: null
  },
  mutations: {
    SET_SELECTED_CAREER_ID(state, payload) {
      state.selectedId = payload.id;
    }
  },
  actions: {},
  getters: {
    getPositions: state => state.positions,
    getNPositions: state => state.positions.length,
    getPositionsNames: state =>
      state.positions.map(position => position.categories),
    getTipsPT: state => state.tipsPT,
    getTipsEN: state => state.tipsEN,
    getSelectedCareerByID: state => state.selectedId,
    getCareerByID: state => id =>
      state.positions.find(career => career.id === id)
  }
};
