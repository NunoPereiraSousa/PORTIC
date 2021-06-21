import {
  teamWorkPrinciplesEN,
  teamWorkPrinciplesPT,
  unitiesEN,
  unitiesPT
} from "../../config/unities";
import { unitiesConfig } from "../../config/api/unities";
// import { entityModule } from "./entityModule";

export const unityModule = {
  state: {
    unities: [],
    principals: [],
    principalsStatus: "",
    dataBody: {
      selectedLang: ""
    },
    unitiesPT: unitiesPT,
    unitiesEN: unitiesEN,
    teamWorkPrinciplesPT: teamWorkPrinciplesPT,
    teamWorkPrinciplesEN: teamWorkPrinciplesEN,
    selectedUnityId: null,
    selectedUnityTitle: null
  },
  mutations: {
    SET_SELECTED_UNITY_ID(state, payload) {
      state.selectedUnityId = payload.id;
    },
    SET_SELECTED_UNITY_TITLE(state, payload) {
      state.selectedUnityTitle = payload.title;
    },
    SET_UNITIES_PRINCIPALS(state, payload) {
      state.principals = payload.principals;
      state.principalsStatus = payload.principalsStatus;
    },
    SET_UNITIES(state, payload) {
      state.unities = payload.unities;
    },
    SET_SELECTED_UNITIES_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setUnitiesPrincipals({ commit, state }) {
      commit(
        "SET_UNITIES_PRINCIPALS",
        await unitiesConfig.getUnitiesPrincipals(
          state.dataBody.selectedLang,
          JSON.parse(localStorage.getItem("vuex")).entityModule.entityId
        )
      );
    },
    async setUnities({ commit, state }) {
      commit(
        "SET_UNITIES",
        await unitiesConfig.getUnities(
          state.dataBody.selectedLang,
          JSON.parse(localStorage.getItem("vuex")).entityModule.entityId
        )
      );
    }
  },
  getters: {
    getUnities: state => (state.unities != "" ? state.unities : []),
    getUnitiesLength: state => {
      return state.unities != ""
        ? state.unities.length != undefined
          ? state.unities.length
          : 0
        : 0;
    },
    getUnityImages: state => {
      return state.unities != "" ? state.unities.map(i => i.img.data) : [];
    },
    getUnitiesPrincipals: state =>
      state.principals != "" ? state.principals : [],
    getPrincipalsLength: state => {
      return state.principals != ""
        ? state.principals.length != undefined
          ? state.principals.length
          : 0
        : 0;
    },
    getPrincipalsStatus: state =>
      state.principalsStatus != "" ? state.principalsStatus : "",
    getUnitiesPT: state => state.unitiesPT,
    getUnitiesEN: state => state.unitiesEN,
    getNUnities: state => state.unitiesPT.length,
    getUnityById: state => id =>
      state.unities.find(unity => unity.id_unity === id),
    getSelectedUnityId: state => state.selectedUnityId,
    getTeamWorkPrinciplesPT: state => state.teamWorkPrinciplesPT,
    getTeamWorkPrinciplesEN: state => state.teamWorkPrinciplesEN
  }
};
