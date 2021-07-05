import { connectionsConfig } from "../../config/api/connections";

export const connectionsModule = {
  state: {
    // AREAS
    areaId: null,
    courseId: null,
    acStatus: null,
    acDeleteStatus: null,

    unitId: null,
    auStatus: null

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
      console.log(state.acDeleteStatus);
    },
    SET_SELECTED_AU(state, payload) {
      state.unitId = payload.unitId;
    },
    SET_AU_STATUS(state, payload) {
      state.auStatus = payload.status;
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
    }
  },
  getters: {}
};
