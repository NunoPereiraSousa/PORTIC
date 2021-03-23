import Vue from "vue";
import Vuex from "vuex";
import { positions, tips } from "../config/positions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    positions: positions,
    tips: tips
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getPositions: state => state.positions,
    getTips: state => state.tips
  }
});
