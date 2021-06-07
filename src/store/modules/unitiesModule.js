import {
  teamWorkPrinciplesEN,
  teamWorkPrinciplesPT,
  unitiesEN,
  unitiesPT
} from "../../config/unities";

export const unityModule = {
  state: {
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
    }
  },
  actions: {},
  getters: {
    getUnitiesPT: state => state.unitiesPT,
    getUnitiesEN: state => state.unitiesEN,
    getNUnities: state => state.unitiesPT.length,
    getUnityById: state => id => state.unitiesPT.find(unity => unity.id === id),
    getSelectedUnityId: state => state.selectedUnityId,
    getTeamWorkPrinciplesPT: state => state.teamWorkPrinciplesPT,
    getTeamWorkPrinciplesEN: state => state.teamWorkPrinciplesEN
  }
};
