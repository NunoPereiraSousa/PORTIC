import Vue from "vue";
import Vuex from "vuex";
import { focuses } from "../config/contacts";
import { positions, tips } from "../config/positions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    positions: positions,
    tips: tips,
    focuses: focuses
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getPositions: state => state.positions,
    getTips: state => state.tips,
    getFocuses: state => state.focuses
  }
});
