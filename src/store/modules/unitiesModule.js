import { teamWorkPrinciples, unities } from "../../config/unities";

export const unityModule = {
  state: {
    unities: unities,
    teamWorkPrinciples: teamWorkPrinciples,
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
    getTeamWorkPrinciples: state => state.teamWorkPrinciples
  }
};
