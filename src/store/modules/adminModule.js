import { headerSvg } from "../../config/admin_header";
import { adminAreasConfig } from "../../config/api/adminAreas";
// import { usersModule } from "../../store/modules/usersModule";

export const adminModule = {
  state: {
    headerSvg: headerSvg,
    areas: [],
    selectedAreaId: null,
    editAreaForm: {
      namePt: null,
      contentPt: null,
      nameEn: null,
      contentEn: null
    },
    editAreaStatus: null,
    addAreaForm: {
      namePt: null,
      contentPt: null,
      nameEn: null,
      contentEn: null
    },
    addAreaStatus: null,
    removeAreaStatus: null
  },
  mutations: {
    SET_ADMIN_AREAS(state, payload) {
      state.areas = payload.areas;
    },
    SET_SELECTED_ADMIN_AREA_ID(state, payload) {
      state.selectedAreaId = payload.id;
    },
    SET_ADMIN_EDIT_AREA(state, payload) {
      state.editAreaForm.namePt = payload.namePt;
      state.editAreaForm.contentPt = payload.contentPt;
      state.editAreaForm.nameEn = payload.nameEn;
      state.editAreaForm.contentEn = payload.contentEn;
    },
    SET_ADMIN_EDIT_AREA_STATUS(state, payload) {
      state.editAreaStatus = payload.status;
    },
    SET_ADMIN_ADD_AREA(state, payload) {
      state.addAreaForm.namePt = payload.namePt;
      state.addAreaForm.contentPt = payload.contentPt;
      state.addAreaForm.nameEn = payload.nameEn;
      state.addAreaForm.contentEn = payload.contentEn;
    },
    SET_ADMIN_ADD_AREA_STATUS(state, payload) {
      state.addAreaStatus = payload.status;
    },
    SET_ADMIN_REMOVE_AREA_STATUS(state, payload) {
      state.removeAreaStatus = payload.status;
    }
  },
  actions: {
    async setAdminAreas({ commit }) {
      commit(
        "SET_ADMIN_AREAS",
        await adminAreasConfig.getAreas(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminEditAreas({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_AREA_STATUS",
        await adminAreasConfig.editArea(
          JSON.parse(localStorage.getItem("token")),
          state.selectedAreaId,
          state.editAreaForm.namePt,
          state.editAreaForm.nameEn,
          state.editAreaForm.contentPt,
          state.editAreaForm.contentEn
        )
      );
    },
    async setAdminAddArea({ commit, state }) {
      commit(
        "SET_ADMIN_ADD_AREA_STATUS",
        await adminAreasConfig.addArea(
          JSON.parse(localStorage.getItem("token")),
          state.addAreaForm.namePt,
          state.addAreaForm.nameEn,
          state.addAreaForm.contentPt,
          state.addAreaForm.contentEn
        )
      );
    },
    async setAdminDeleteArea({ commit, state }) {
      commit(
        "SET_ADMIN_REMOVE_AREA_STATUS",
        await adminAreasConfig.deleteArea(
          JSON.parse(localStorage.getItem("token")),
          state.selectedAreaId
        )
      );
    }
  },
  getters: {
    getHeaderLinks: state => state.headerSvg,
    getAdminAreas: state => (state.areas != "" ? state.areas : []),
    getAdminSelectedAreaId: state => state.selectedAreaId,
    getAdminAreaById: state => id =>
      state.areas.find(area => area.id_area === id)
  }
};
