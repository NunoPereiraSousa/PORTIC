import { positions, tipsEN, tipsPT } from "../../config/recruitment";

export const recruitmentModule = {
  state: {
    positions: positions,
    tipsPT: tipsPT,
    tipsEN: tipsEN
  },
  mutations: {},
  actions: {},
  getters: {
    getPositions: state => state.positions,
    getNPositions: state => state.positions.length,
    getPositionsNames: state =>
      state.positions.map(position => position.categories),
    getTipsPT: state => state.tipsPT,
    getTipsEN: state => state.tipsEN
  }
};
