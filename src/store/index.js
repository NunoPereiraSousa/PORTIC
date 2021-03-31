import Vue from "vue";
import Vuex from "vuex";
import { areas } from "../config/areas";
import { focuses } from "../config/contacts";
import { courses } from "../config/courses";
import { news } from "../config/home";
import { medias } from "../config/media";
import { projects } from "../config/projects";
import { positions, tips } from "../config/recruitment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    areas: areas,
    courses: courses,
    positions: positions,
    tips: tips,
    focuses: focuses,
    news: news,
    medias: medias,
    projects: projects
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
    getNews: state => state.news,
    getAreas: state => state.areas,
    getCourses: state => state.courses,
    getMedias: state => state.medias,
    getProjects: state => state.projects
  }
});
