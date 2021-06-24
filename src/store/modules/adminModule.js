import { headerSvg } from "../../config/admin_header";
import { adminAreasConfig } from "../../config/api/adminAreas";
import { adminMediasConfig } from "../../config/api/adminMedia";
import { adminCoursesConfig } from "../../config/api/adminCourses";

// import { usersModule } from "../../store/modules/usersModule";

export const adminModule = {
  state: {
    headerSvg: headerSvg,

    // AREAS
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
    areasFocus: [],
    selectedAreaFocusId: null,
    editAreaFocusForm: {
      description_pt: null,
      description_eng: null
    },
    editAreaFocusStatus: null,
    addAreaFocusForm: {
      file: null,
      description_pt: null,
      description_eng: null
    },
    addAreaFocusStatus: null,
    deleteAreaFocusStatus: null,

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
    removeMediaStatus: null,

    // COURSES
    courses: [],
    selectedCourseId: null,
    editCourseStatus: null,
    editCourseForm: {
      designation: null,
      html_structure_eng: null,
      html_structure_pt: null
    },
    addCourseStatus: null,
    addCourseForm: {
      designation: null,
      html_structure_eng: null,
      html_structure_pt: null
    },
    removeCourseStatus: null
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
    SET_ADMIN_AREAS_FOCUS(state, payload) {
      state.areasFocus = payload.focus;
    },
    SET_SELECTED_ADMIN_AREA_FOCUS_ID(state, payload) {
      state.selectedAreaFocusId = payload.id;
    },
    SET_ADMIN_EDIT_AREA_FOCUS(state, payload) {
      state.editAreaFocusForm.description_pt = payload.description_pt;
      state.editAreaFocusForm.description_eng = payload.description_eng;
    },
    SET_ADMIN_EDIT_AREA_FOCUS_STATUS(state, payload) {
      state.editAreaFocusStatus = payload.status;
    },
    SET_ADMIN_ADD_AREA_FOCUS_FORM(state, payload) {
      state.addAreaFocusForm.file = payload.file;
      state.addAreaFocusForm.description_pt = payload.description_pt;
      state.addAreaFocusForm.description_eng = payload.description_eng;

      console.log(state.addAreaFocusForm);
    },
    SET_ADMIN_ADD_AREA_FOCUS_STATUS(state, payload) {
      state.addAreaFocusStatus = payload.status;

      console.log(state.addAreaFocusStatus);
    },
    SET_ADMIN_REMOVE_AREA_FOCUS_STATUS(state, payload) {
      state.deleteAreaFocusStatus = payload.status;
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
    },

    // COURSES MUTATIONS
    SET_ADMIN_COURSES(state, payload) {
      state.courses = payload.courses;
    },
    SET_SELECTED_ADMIN_COURSE_ID(state, payload) {
      state.selectedCourseId = payload.id;
    },
    SET_ADMIN_EDIT_COURSE_STATUS(state, payload) {
      state.editCourseStatus = payload.status;
    },
    SET_ADMIN_EDIT_COURSE(state, payload) {
      state.editCourseForm.designation = payload.designation;
      state.editCourseForm.html_structure_eng = payload.html_structure_eng;
      state.editCourseForm.html_structure_pt = payload.html_structure_pt;
    },
    SET_ADMIN_ADD_COURSE_STATUS(state, payload) {
      state.addCourseStatus = payload.status;
    },
    SET_ADMIN_ADD_COURSE(state, payload) {
      state.addCourseForm.designation = payload.designation;
      state.addCourseForm.html_structure_eng = payload.html_structure_eng;
      state.addCourseForm.html_structure_pt = payload.html_structure_pt;
    },
    SET_ADMIN_REMOVE_COURSE_STATUS(state, payload) {
      state.removeCourseStatus = payload.status;
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
    async setAdminAreasFocus({ commit }) {
      commit(
        "SET_ADMIN_AREAS_FOCUS",
        await adminAreasConfig.getAreasFocus(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminEditAreasFocus({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_AREA_FOCUS_STATUS",
        await adminAreasConfig.editAreaFocus(
          JSON.parse(localStorage.getItem("token")),
          state.selectedAreaFocusId,
          state.editAreaFocusForm.description_pt,
          state.editAreaFocusForm.description_eng
        )
      );
    },
    async setAdminAddAreasFocus({ commit, state }) {
      console.log("DISPATCH");
      commit(
        "SET_ADMIN_ADD_AREA_FOCUS_STATUS",
        await adminAreasConfig.addAreaFocus(
          JSON.parse(localStorage.getItem("token")),
          state.addAreaFocusForm.file,
          state.addAreaFocusForm.description_pt,
          state.addAreaFocusForm.description_eng
        )
      );
    },
    async setAdminDeleteAreaFocus({ commit, state }) {
      console.log(state.selectedAreaFocusId);
      commit(
        "SET_ADMIN_REMOVE_AREA_FOCUS_STATUS",
        await adminAreasConfig.deleteAreaFocus(
          JSON.parse(localStorage.getItem("token")),
          state.selectedAreaFocusId
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
    },

    // COURSES ACTIONS
    async setAdminCourses({ commit }) {
      commit(
        "SET_ADMIN_COURSES",
        await adminCoursesConfig.getCourses(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminEditCourse({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_COURSE_STATUS",
        await adminCoursesConfig.editCourse(
          JSON.parse(localStorage.getItem("token")),
          state.selectedCourseId,
          state.editCourseForm.designation,
          state.editCourseForm.html_structure_eng,
          state.editCourseForm.html_structure_pt
        )
      );
    },
    async setAdminAddCourse({ commit, state }) {
      console.log("DISPATCH PLEASE");
      commit(
        "SET_ADMIN_ADD_COURSE_STATUS",
        await adminCoursesConfig.addCourse(
          JSON.parse(localStorage.getItem("token")),
          state.addCourseForm.designation,
          state.addCourseForm.html_structure_eng,
          state.addCourseForm.html_structure_pt
        )
      );
    },
    async setAdminDeleteCourse({ commit, state }) {
      commit(
        "SET_ADMIN_REMOVE_COURSE_STATUS",
        await adminCoursesConfig.deleteCourse(
          JSON.parse(localStorage.getItem("token")),
          state.selectedCourseId
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
    getAdminAreasFocus: state =>
      state.areasFocus != "" ? state.areasFocus : [],
    getAdminSelectedAreaFocusId: state => state.selectedAreaFocusId,
    getAdminAreaFocusById: state => id =>
      state.areasFocus.find(focus => focus.id_areas_focus === id),
    getAdminAreaFocusByName: state => name =>
      state.areasFocus.find(focus => focus.description_pt === name),

    // MEDIAS GETTERS
    getAdminMedias: state => (state.medias != "" ? state.medias : []),
    getAdminSelectedMediaId: state => state.selectedMediaId,
    getAdminMediaById: state => id =>
      state.medias.find(media => media.id_media === id),

    // COURSES GETTERS
    getAdminCourses: state => (state.courses != "" ? state.courses : []),
    getAdminSelectedCourseId: state => state.selectedCourseId,
    getAdminCourseById: state => id =>
      state.courses.find(course => course.id_course === id)
  }
};
