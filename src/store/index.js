import Vue from "vue";
import Vuex from "vuex";
import { focuses } from "../config/contacts";
import { news } from "../config/home";
import { positions, tips } from "../config/recruitment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    positions: positions,
    tips: tips,
    focuses: focuses,
    news: news
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getPositions: state => state.positions,
    getNPositions: state => state.positions.length,
    getPositionsNames: state =>
      state.positions.map(position => position.categories),

    getTips: state => state.tips,
    getFocuses: state => state.focuses,
    getNews: state => state.news
  }
});
