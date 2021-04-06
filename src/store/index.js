import Vue from "vue";
import Vuex from "vuex";
import { areas, iconCards } from "../config/areas";
import { focuses } from "../config/contacts";
import { courses, iconCoursesCards } from "../config/courses";
import { news } from "../config/home";
import { medias } from "../config/media";
import { projects } from "../config/projects";
import { positions, tips } from "../config/recruitment";
import { teamWorkPrinciples, unities } from "../config/unities";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    areas: areas,
    iconCards: iconCards,
    courses: courses,
    iconCoursesCards: iconCoursesCards,
    positions: positions,
    tips: tips,
    focuses: focuses,
    news: news,
    selectedNewsId: null,
    selectedUnityId: null,
    medias: medias,
    projects: projects,
    selectedProject: null,
    unities: unities,
    teamWorkPrinciples: teamWorkPrinciples
  },
  mutations: {
    SET_SELECTED_NEWS_ID(state, payload) {
      state.selectedNewsId = payload.id;
    },
    SET_SELECTED_UNITY_ID(state, payload) {
      state.selectedUnityId = payload.id;
    },
    SET_SELECTED_PROJECT(state, payload) {
      state.selectedProject = payload.initials;
      localStorage.setItem(
        "project_name",
        JSON.stringify(state.selectedProject)
      );
    }
  },
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
    getNewsById: state => id => state.news.find(n => n.id == id),
    getSelectedNewsId: state => state.selectedNewsId,
    getAreas: state => state.areas,
    getNAreas: state => state.areas.length,
    getIconCards: state => state.iconCards,
    getCourses: state => state.courses,
    getIconCoursesCards: state => state.iconCoursesCards,
    getMedias: state => state.medias,
    getProjects: state => state.projects,
    getSelectedProject: state => state.selectedProject,
    getProjectByName: state => initials =>
      state.projects.find(p => p.initials === initials),
    getUnities: state => state.unities,
    getUnityById: state => id => state.unities.find(unity => unity.id === id),
    getSelectedUnityId: state => state.selectedUnityId,
    getTeamWorkPrinciples: state => state.teamWorkPrinciples
  }
});
