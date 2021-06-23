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
    editAreaStatus: null
    // editAreaFormEn: {
    //   nameEn: null,
    //   contentEn: null
    // }
  },
  mutations: {
    SET_ADMIN_AREAS(state, payload) {
      state.areas = payload.areas;
    },
    SET_SELECTED_ADMIN_AREA_ID(state, payload) {
      state.selectedAreaId = payload.id;

      console.log(state.selectedAreaId);
    },
    SET_ADMIN_EDIT_AREA(state, payload) {
      state.editAreaForm.namePt = payload.namePt;
      state.editAreaForm.contentPt = payload.contentPt;
      state.editAreaForm.nameEn = payload.nameEn;
      state.editAreaForm.contentEn = payload.contentEn;

      console.log(
        state.editAreaForm.namePt,
        state.editAreaForm.contentPt,
        state.editAreaForm.nameEn,
        state.editAreaForm.contentEn
      );
    },
    SET_ADMIN_EDIT_AREA_STATUS(state, payload) {
      state.editAreaStatus = payload.status;

      console.log(state.editAreaStatus);
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
