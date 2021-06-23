import { headerSvg } from "../../config/admin_header";
import { adminAreasConfig } from "../../config/api/adminAreas";
import { adminMediasConfig } from "../../config/api/adminMedia";

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
    removeAreaStatus: null,

    // MEDIAS
    medias: [],
    selectedMediaId: null,
    editMediaStatus: null,
    editMediaForm: {
      title_eng: null,
      title_pt: null,
      description_pt: null,
      description_eng: null,
      appearance_case: null,
      youtube_path: null
    },
    addMediaStatus: null,
    addMediaForm: {
      title_eng: null,
      title_pt: null,
      description_pt: null,
      description_eng: null,
      appearance_case: null,
      youtube_path: null
    },
    removeMediaStatus: null
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
    },
    // MEDIAS MUTATIONS
    SET_ADMIN_MEDIAS(state, payload) {
      state.medias = payload.medias;
    },
    SET_SELECTED_ADMIN_MEDIA_ID(state, payload) {
      state.selectedMediaId = payload.id;
    },
    SET_ADMIN_EDIT_MEDIA_STATUS(state, payload) {
      state.editMediaStatus = payload.status;
    },
    SET_ADMIN_EDIT_MEDIA(state, payload) {
      state.editMediaForm.title_eng = payload.title_eng;
      state.editMediaForm.title_pt = payload.title_pt;
      state.editMediaForm.description_pt = payload.description_pt;
      state.editMediaForm.description_eng = payload.description_eng;
      state.editMediaForm.appearance_case = payload.appearance_case;
      state.editMediaForm.youtube_path = payload.youtube_path;
    },
    SET_ADMIN_ADD_MEDIA_STATUS(state, payload) {
      state.addMediaStatus = payload.status;
    },
    SET_ADMIN_ADD_MEDIA(state, payload) {
      state.addMediaForm.title_eng = payload.title_eng;
      state.addMediaForm.title_pt = payload.title_pt;
      state.addMediaForm.description_pt = payload.description_pt;
      state.addMediaForm.description_eng = payload.description_eng;
      state.addMediaForm.appearance_case = payload.appearance_case;
      state.addMediaForm.youtube_path = payload.youtube_path;
    },
    SET_ADMIN_REMOVE_MEDIA_STATUS(state, payload) {
      state.removeMediaStatus = payload.status;
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
    },
    // MEDIA ACTIONS
    async setAdminMedias({ commit }) {
      commit(
        "SET_ADMIN_MEDIAS",
        await adminMediasConfig.getMedias(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminEditMedia({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_MEDIA_STATUS",
        await adminMediasConfig.editMedia(
          JSON.parse(localStorage.getItem("token")),
          state.selectedMediaId,
          state.editMediaForm.title_eng,
          state.editMediaForm.title_pt,
          state.editMediaForm.description_pt,
          state.editMediaForm.description_eng,
          state.editMediaForm.appearance_case,
          state.editMediaForm.youtube_path
        )
      );

      console.log(
        state.editMediaForm.title_eng,
        state.editMediaForm.title_pt,
        state.editMediaForm.description_pt,
        state.editMediaForm.description_eng,
        state.editMediaForm.appearance_case,
        state.editMediaForm.youtube_path
      );
    },
    async setAdminAddMedia({ commit, state }) {
      commit(
        "SET_ADMIN_ADD_MEDIA_STATUS",
        await adminMediasConfig.addMedia(
          JSON.parse(localStorage.getItem("token")),
          state.addMediaForm.title_eng,
          state.addMediaForm.title_pt,
          state.addMediaForm.description_pt,
          state.addMediaForm.description_eng,
          state.addMediaForm.appearance_case,
          state.addMediaForm.youtube_path
        )
      );
    },
    async setAdminDeleteMedia({ commit, state }) {
      commit(
        "SET_ADMIN_REMOVE_MEDIA_STATUS",
        await adminMediasConfig.deleteMedia(
          JSON.parse(localStorage.getItem("token")),
          state.selectedMediaId
        )
      );
    }
  },
  getters: {
    getHeaderLinks: state => state.headerSvg,
    getAdminAreas: state => (state.areas != "" ? state.areas : []),
    getAdminSelectedAreaId: state => state.selectedAreaId,
    getAdminAreaById: state => id =>
      state.areas.find(area => area.id_area === id),
    getAdminMedias: state => (state.medias != "" ? state.medias : []),
    getAdminSelectedMediaId: state => state.selectedMediaId,
    getAdminMediaById: state => id =>
      state.medias.find(media => media.id_media === id)
  }
};
