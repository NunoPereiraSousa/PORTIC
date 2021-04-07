import { positions, tips } from "../../config/recruitment";

export const recruitmentModule = {
  state: {
    positions: positions,
    tips: tips
  },
  mutations: {},
  actions: {},
  getters: {
    getPositions: state => state.positions,
    getNPositions: state => state.positions.length,
    getPositionsNames: state =>
      state.positions.map(position => position.categories),
    getTips: state => state.tips
  }
};
