import { connectionsConfig } from "../../config/api/connections";

export const connectionsModule = {
  state: {
    // AREAS
    areaId: null,
    courseId: null,
    acStatus: null,
    acDeleteStatus: null,

    unitId: null,
    auStatus: null,
    auDeleteStatus: null,
    apDeleteStatus: null,

    acrStatus: null,
    careerId: null,
    acrDeleteStatus: null,

    projectId: null

    // COURSES
  },
  mutations: {
    SET_SELECTED_AC(state, payload) {
      state.courseId = payload.courseId;
    },
    SET_AC_STATUS(state, payload) {
      state.acStatus = payload.status;
    },
    SET_AC_DELETE_STATUS(state, payload) {
      state.acDeleteStatus = payload.status;
    },
    SET_SELECTED_AU(state, payload) {
      state.unitId = payload.unitId;
    },
    SET_AU_STATUS(state, payload) {
      state.auStatus = payload.status;
    },
    SET_AU_DELETE_STATUS(state, payload) {
      state.auDeleteStatus = payload.status;
    },
    SET_AP_STATUS(state, payload) {
      state.apStatus = payload.status;
    },
    SET_SELECTED_AP(state, payload) {
      state.projectId = payload.projectId;
    },
    SET_AP_DELETE_STATUS(state, payload) {
      state.apDeleteStatus = payload.status;
      console.log(state.apDeleteStatus);
    },
    SET_SELECTED_ACR(state, payload) {
      state.careerId = payload.careerId;
    },
    SET_ACR_STATUS(state, payload) {
      state.acrStatus = payload.status;
    },
    SET_ACR_DELETE_STATUS(state, payload) {
      state.acrDeleteStatus = payload.status;
    }
  },
  actions: {
    async setAdminAC({ commit, state }) {
      commit(
        "SET_AC_STATUS",
        await connectionsConfig.areasCourses(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.courseId
        )
      );
    },
    async setAdminDeleteAC({ commit, state }) {
      commit(
        "SET_AC_DELETE_STATUS",
        await connectionsConfig.areasCoursesDelete(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.courseId
        )
      );
    },
    async setAdminAU({ commit, state }) {
      commit(
        "SET_AU_STATUS",
        await connectionsConfig.areasUnits(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.unitId
        )
      );
    },
    async setAdminDeleteAU({ commit, state }) {
      commit(
        "SET_AU_DELETE_STATUS",
        await connectionsConfig.areasUnitsDelete(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.unitId
        )
      );
    },
    async setAdminAP({ commit, state }) {
      commit(
        "SET_AP_STATUS",
        await connectionsConfig.areasProjects(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.projectId
        )
      );
    },
    async setAdminDeleteAP({ commit, state }) {
      commit(
        "SET_AP_DELETE_STATUS",
        await connectionsConfig.areasProjectsDelete(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.projectId
        )
      );
    },
    async setAdminACR({ commit, state }) {
      commit(
        "SET_ACR_STATUS",
        await connectionsConfig.areasCareers(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.careerId
        )
      );
    },
    async setAdminDeleteACR({ commit, state }) {
      commit(
        "SET_ACR_DELETE_STATUS",
        await connectionsConfig.areasCareersDelete(
          JSON.parse(localStorage.getItem("token")),
          JSON.parse(localStorage.getItem("vuex_admin_areas")).adminModule
            .selectedAreaId,
          state.careerId
        )
      );
    }
  },
  getters: {}
};
