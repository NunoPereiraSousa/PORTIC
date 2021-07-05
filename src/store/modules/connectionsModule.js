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

    projectId: null,

    // COURSES
    ucStatus: null,
    ucDeleteStatus: null,

    puStatus: null,
    puDeleteStatus: null,

    ucrStatus: null,
    ucrDeleteStatus: null,

    ccrStatus: null,
    ccrDeleteStatus: null
  },
  mutations: {
    SET_SELECTED_AC(state, payload) {
      state.areaId = payload.areaId;
      state.courseId = payload.courseId;
    },
    SET_AC_STATUS(state, payload) {
      state.acStatus = payload.status;
    },
    SET_AC_DELETE_STATUS(state, payload) {
      state.acDeleteStatus = payload.status;
    },
    SET_SELECTED_AU(state, payload) {
      state.areaId = payload.areaId;
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
    },
    SET_UC_STATUS(state, payload) {
      state.ucStatus = payload.status;
    },
    SET_UC_DELETE_STATUS(state, payload) {
      state.ucDeleteStatus = payload.status;
    },
    SET_SELECTED_UC(state, payload) {
      state.courseId = payload.courseId;
      state.unitId = payload.unitId;
    },
    SET_PU_STATUS(state, payload) {
      state.puStatus = payload.status;
    },
    SET_PU_DELETE_STATUS(state, payload) {
      state.puDeleteStatus = payload.status;
    },
    SET_SELECTED_PU(state, payload) {
      state.projectId = payload.projectId;
      state.unitId = payload.unitId;
    },
    SET_SELECTED_UCR(state, payload) {
      state.careerId = payload.careerId;
      state.unitId = payload.unitId;
    },
    SET_UCR_STATUS(state, payload) {
      state.ucrStatus = payload.status;
    },
    SET_UCR_DELETE_STATUS(state, payload) {
      state.ucrDeleteStatus = payload.status;
    },
    SET_CP_STATUS(state, payload) {
      state.cpStatus = payload.status;
    },
    SET_CP_DELETE_STATUS(state, payload) {
      state.cpDeleteStatus = payload.status;
    },
    SET_SELECTED_CP(state, payload) {
      state.projectId = payload.projectId;
      state.courseId = payload.courseId;
    },
    SET_CCR_STATUS(state, payload) {
      state.ccrStatus = payload.status;
    },
    SET_CCR_DELETE_STATUS(state, payload) {
      state.ccrDeleteStatus = payload.status;
    },
    SET_SELECTED_CCR(state, payload) {
      state.careerId = payload.careerId;
      state.courseId = payload.courseId;
    }
  },
  actions: {
    async setAdminAC({ commit, state }) {
      commit(
        "SET_AC_STATUS",
        await connectionsConfig.areasCourses(
          JSON.parse(localStorage.getItem("token")),
          state.areaId,
          state.courseId
        )
      );
    },
    async setAdminDeleteAC({ commit, state }) {
      commit(
        "SET_AC_DELETE_STATUS",
        await connectionsConfig.areasCoursesDelete(
          JSON.parse(localStorage.getItem("token")),
          state.areaId,
          state.courseId
        )
      );
    },
    async setAdminAU({ commit, state }) {
      commit(
        "SET_AU_STATUS",
        await connectionsConfig.areasUnits(
          JSON.parse(localStorage.getItem("token")),
          state.areaId,
          state.unitId
        )
      );
    },
    async setAdminDeleteAU({ commit, state }) {
      commit(
        "SET_AU_DELETE_STATUS",
        await connectionsConfig.areasUnitsDelete(
          JSON.parse(localStorage.getItem("token")),
          state.areaId,
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
    },
    async setAdminUC({ commit, state }) {
      commit(
        "SET_UC_STATUS",
        await connectionsConfig.unitsCourses(
          JSON.parse(localStorage.getItem("token")),
          state.courseId,
          state.unitId
        )
      );
    },
    async setAdminDeleteUC({ commit, state }) {
      commit(
        "SET_UC_DELETE_STATUS",
        await connectionsConfig.unitsCoursesDelete(
          JSON.parse(localStorage.getItem("token")),
          state.courseId,
          state.unitId
        )
      );
    },
    async setAdminPU({ commit, state }) {
      commit(
        "SET_PU_STATUS",
        await connectionsConfig.projectsUnits(
          JSON.parse(localStorage.getItem("token")),
          state.projectId,
          state.unitId
        )
      );
    },
    async setAdminDeletePU({ commit, state }) {
      commit(
        "SET_PU_DELETE_STATUS",
        await connectionsConfig.projectsUnitsDelete(
          JSON.parse(localStorage.getItem("token")),
          state.projectId,
          state.unitId
        )
      );
    },
    async setAdminUCR({ commit, state }) {
      commit(
        "SET_UCR_STATUS",
        await connectionsConfig.careersUnits(
          JSON.parse(localStorage.getItem("token")),
          state.careerId,
          state.unitId
        )
      );
    },
    async setAdminDeleteUCR({ commit, state }) {
      commit(
        "SET_UCR_DELETE_STATUS",
        await connectionsConfig.careersUnitsDelete(
          JSON.parse(localStorage.getItem("token")),
          state.careerId,
          state.unitId
        )
      );
    },
    async setAdminCP({ commit, state }) {
      commit(
        "SET_CP_STATUS",
        await connectionsConfig.coursesProjects(
          JSON.parse(localStorage.getItem("token")),
          state.projectId,
          state.courseId
        )
      );
    },
    async setAdminDeleteCP({ commit, state }) {
      commit(
        "SET_CP_DELETE_STATUS",
        await connectionsConfig.coursesProjectsDelete(
          JSON.parse(localStorage.getItem("token")),
          state.projectId,
          state.courseId
        )
      );
    },
    async setAdminCCR({ commit, state }) {
      commit(
        "SET_CCR_STATUS",
        await connectionsConfig.careersCourses(
          JSON.parse(localStorage.getItem("token")),
          state.careerId,
          state.courseId
        )
      );
    },
    async setAdminDeleteCCR({ commit, state }) {
      commit(
        "SET_CCR_DELETE_STATUS",
        await connectionsConfig.careersCoursesDelete(
          JSON.parse(localStorage.getItem("token")),
          state.careerId,
          state.courseId
        )
      );
    }
  },
  getters: {}
};
