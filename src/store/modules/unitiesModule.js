import {
  teamWorkPrinciplesEN,
  teamWorkPrinciplesPT,
  unities
} from "../../config/unities";

export const unityModule = {
  state: {
    unities: unities,
    teamWorkPrinciplesPT: teamWorkPrinciplesPT,
    teamWorkPrinciplesEN: teamWorkPrinciplesEN,
    selectedUnityId: null
  },
  mutations: {
    SET_SELECTED_UNITY_ID(state, payload) {
      state.selectedUnityId = payload.id;
    }
  },
  actions: {},
  getters: {
    getUnities: state => state.unities,
    getNUnities: state => state.unities.length,
    getUnityById: state => id => state.unities.find(unity => unity.id === id),
    getSelectedUnityId: state => state.selectedUnityId,
    getTeamWorkPrinciplesPT: state => state.teamWorkPrinciplesPT,
    getTeamWorkPrinciplesEN: state => state.teamWorkPrinciplesEN
  }
};
