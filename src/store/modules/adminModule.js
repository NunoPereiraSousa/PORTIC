import { headerSvg } from "../../config/admin_header";
import { adminAreasConfig } from "../../config/api/adminAreas";
import { adminMediasConfig } from "../../config/api/adminMedia";
import { adminCoursesConfig } from "../../config/api/adminCourses";
import { adminUnitsConfig } from "../../config/api/adminUnits";
import { adminNewsConfig } from "../../config/api/adminNews";
import { adminProjectsConfig } from "../../config/api/adminProjects";
import { adminCareersConfig } from "../../config/api/adminCareers";

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
    editAreaFocusIconStatus: null,
    focusImg: null,

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

    // CAREERS
    careers: [],
    selectedCareerId: null,
    editCareerForm: {
      designation_pt: null,
      designation_eng: null,
      category_1: null,
      category_2: null,
      category_3: null,
      desc_html_structure_pt: null,
      desc_html_structure_eng: null,
      pdf_path: null,
      candidacy_link: null
    },
    editCareerStatus: null,
    addCareerStatus: null,
    addCareerForm: {
      designation_pt: null,
      designation_eng: null,
      category_1: null,
      category_2: null,
      category_3: null,
      desc_html_structure_pt: null,
      desc_html_structure_eng: null,
      pdf_path: null,
      candidacy_link: null
    },
    deleteCareerStatus: null,

    // COURSES
    courses: [],
    selectedCourseId: null,
    editCourseStatus: null,
    editCourseForm: {
      designation: null,
      html_structure_eng: null,
      html_structure_pt: null,
      coordinator: null
    },
    addCourseStatus: null,
    addCourseForm: {
      designation: null,
      html_structure_eng: null,
      html_structure_pt: null,
      coordinator: null
    },
    removeCourseStatus: null,

    // NEWS
    news: [],
    selectedNewsId: null,
    editNewsForm: {
      file: null,
      title_pt: null,
      title_eng: null,
      description_pt: null,
      description_eng: null,
      published_date: null,
      project_only: null
    },
    editAdminEditNewsStatus: null,
    addNewsForm: {
      file: null,
      title_pt: null,
      title_eng: null,
      description_pt: null,
      description_eng: null,
      published_date: null
      //  project_only: null
    },
    addAdminEditNewsStatus: null,
    addAdminDeleteNewsStatus: null,

    // PROJECTS
    projects: [],
    selectedProjectId: null,
    addProjectForm: {
      title: null,
      initials: null,
      reference: null,
      desc_html_structure_eng: null,
      desc_html_structure_pt: null,
      summary_eng: null,
      summary_pt: null,
      project_contact: null,
      project_email: null,
      start_date: null,
      end_date: null,
      pdf_path: null,
      coordinator: null,
      images: []
    },
    addProjectStatus: null,
    editProjectForm: {
      title: null,
      initials: null,
      reference: null,
      desc_html_structure_eng: null,
      desc_html_structure_pt: null,
      summary_eng: null,
      summary_pt: null,
      start_date: null,
      end_date: null,
      project_contact: null,
      project_email: null,
      coordinator: null,
      pdf_path: null
    },
    deleteProjectStatus: null,
    addImgStatus: null,
    images: [],
    selectedProjectImg: null,
    deleteImgStatus: null,
    addPartnerStatus: null,
    addPartnerForm: {
      investor: null,
      file: null
    },
    deletePartnerStatus: null,
    selectedPartnerId: null,
    addNewsProjectForm: {
      title_pt: null,
      title_eng: null,
      description_pt: null,
      description_eng: null,
      published_date: null
    },
    addNewsProjectStatus: null,
    addProjectTeamForm: {
      user_id: null,
      can_edit: null
    },
    editProjectTeamForm: {
      user_id: null,
      can_edit: null
    },
    deleteTeamMemberStatus: null,
    selectedTeamMemberId: null,
    addProjectNewsStatus: null,

    // UNITS
    units: [],
    addUnitStatus: null,
    addUnitForm: {
      file: null,
      designation: null,
      description_pt: null,
      description_eng: null
    },
    selectedUnitId: null,
    editUnitForm: {
      designation: null,
      description_pt: null,
      description_eng: null,
      image: null
    },
    editUnitStatus: null,
    deleteUnitStatus: null
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
    },
    SET_ADMIN_ADD_AREA_FOCUS_STATUS(state, payload) {
      state.addAreaFocusStatus = payload.status;
    },
    SET_ADMIN_REMOVE_AREA_FOCUS_STATUS(state, payload) {
      state.deleteAreaFocusStatus = payload.status;
    },
    SET_ADMIN_EDIT_AREA_FOCUS_ICON(state, payload) {
      state.editAreaFocusIconStatus = payload.status;
    },
    SET_ADMIN_EDIT_IMG_AREA_FOCUS_FORM(state, payload) {
      state.focusImg = payload.file;
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

    //CAREERS MUTATIONS
    SET_ADMIN_CAREERS(state, payload) {
      state.careers = payload.careers;
    },
    SET_SELECTED_ADMIN_CAREER_ID(state, payload) {
      state.selectedCareerId = payload.id;
    },
    SET_ADMIN_EDIT_CAREERS_STATUS(state, payload) {
      state.editCareerStatus = payload.status;
    },
    SET_ADMIN_EDIT_CAREERS_FORM(state, payload) {
      state.editCareerForm.designation_pt = payload.designation_pt;
      state.editCareerForm.designation_eng = payload.designation_eng;
      state.editCareerForm.category_1 = payload.category_1;
      state.editCareerForm.category_2 = payload.category_2;
      state.editCareerForm.category_3 = payload.category_3;
      state.editCareerForm.desc_html_structure_pt =
        payload.desc_html_structure_pt;
      state.editCareerForm.desc_html_structure_eng =
        payload.desc_html_structure_eng;
      state.editCareerForm.pdf_path = payload.pdf_path;
      state.editCareerForm.candidacy_link = payload.candidacy_link;
    },
    SET_ADMIN_ADD_CAREERS_STATUS(state, payload) {
      state.addCareerStatus = payload.status;
    },
    SET_ADMIN_ADD_CAREERS_FORM(state, payload) {
      state.addCareerForm.designation_pt = payload.designation_pt;
      state.addCareerForm.designation_eng = payload.designation_eng;
      state.addCareerForm.category_1 = payload.category_1;
      state.addCareerForm.category_2 = payload.category_2;
      state.addCareerForm.category_3 = payload.category_3;
      state.addCareerForm.desc_html_structure_pt =
        payload.desc_html_structure_pt;
      state.addCareerForm.desc_html_structure_eng =
        payload.desc_html_structure_eng;
      state.addCareerForm.pdf_path = payload.pdf_path;
      state.addCareerForm.candidacy_link = payload.candidacy_link;
    },
    SET_ADMIN_DELETE_CAREERS_STATUS(state, payload) {
      state.deleteCareerStatus = payload.status;
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
      state.editCourseForm.coordinator = payload.coordinator;
    },
    SET_ADMIN_ADD_COURSE_STATUS(state, payload) {
      state.addCourseStatus = payload.status;
    },
    SET_ADMIN_ADD_COURSE(state, payload) {
      state.addCourseForm.designation = payload.designation;
      state.addCourseForm.html_structure_eng = payload.html_structure_eng;
      state.addCourseForm.html_structure_pt = payload.html_structure_pt;
      state.addCourseForm.coordinator = payload.coordinator;
    },
    SET_ADMIN_REMOVE_COURSE_STATUS(state, payload) {
      state.removeCourseStatus = payload.status;
    },

    // NEWS MUTATIONS
    SET_ADMIN_NEWS(state, payload) {
      state.news = payload.news;
    },
    SET_SELECTED_ADMIN_UNIT_ID(state, payload) {
      state.selectedUnitId = payload.id;
    },
    SET_ADMIN_EDIT_NEWS(state, payload) {
      state.editNewsForm.file = payload.file;
      state.editNewsForm.title_pt = payload.title_pt;
      state.editNewsForm.title_eng = payload.title_eng;
      state.editNewsForm.description_pt = payload.description_pt;
      state.editNewsForm.description_eng = payload.description_eng;
      state.editNewsForm.published_date = payload.published_date;
      state.editNewsForm.project_only = payload.project_only;
    },
    SET_ADMIN_EDIT_NEWS_STATUS(state, payload) {
      state.editAdminEditNewsStatus = payload.status;
    },
    SET_ADMIN_ADD_NEWS(state, payload) {
      state.addNewsForm.file = payload.file;
      state.addNewsForm.title_pt = payload.title_pt;
      state.addNewsForm.title_eng = payload.title_eng;
      state.addNewsForm.description_pt = payload.description_pt;
      state.addNewsForm.description_eng = payload.description_eng;
      state.addNewsForm.published_date = payload.published_date;
      //  state.addNewsForm.project_only = payload.project_only;
    },
    SET_ADMIN_ADD_NEWS_STATUS(state, payload) {
      state.addAdminEditNewsStatus = payload.status;
    },
    SET_ADMIN_DELETE_NEWS_STATUS(state, payload) {
      state.addAdminDeleteNewsStatus = payload.status;
    },

    // PROJECTS MUTATIONS
    SET_ADMIN_PROJECTS(state, payload) {
      state.projects = payload.projects;
    },
    SET_SELECTED_ADMIN_NEWS_ID(state, payload) {
      state.selectedNewsId = payload.id;
    },
    SET_PROJECTS_ADD_FORM(state, payload) {
      state.addProjectForm.title = payload.title;
      state.addProjectForm.initials = payload.initials;
      state.addProjectForm.reference = payload.reference;
      state.addProjectForm.desc_html_structure_eng =
        payload.desc_html_structure_eng;
      state.addProjectForm.desc_html_structure_pt =
        payload.desc_html_structure_pt;
      state.addProjectForm.summary_eng = payload.summary_eng;
      state.addProjectForm.summary_pt = payload.summary_pt;
      state.addProjectForm.project_contact = payload.project_contact;
      state.addProjectForm.project_email = payload.project_email;
      state.addProjectForm.start_date = payload.start_date;
      state.addProjectForm.end_date = payload.end_date;
      state.addProjectForm.pdf_path = payload.pdf_path;
      state.addProjectForm.coordinator = payload.coordinator;
      state.addProjectForm.images = payload.gallery_imgs;
    },
    SET_PROJECTS_ADD_STATUS(state, payload) {
      state.addProjectStatus = payload.status;
    },
    SET_PROJECTS_EDIT_FORM(state, payload) {
      state.editProjectForm.title = payload.title;
      state.editProjectForm.initials = payload.initials;
      state.editProjectForm.reference = payload.reference;
      state.editProjectForm.desc_html_structure_eng =
        payload.desc_html_structure_eng;
      state.editProjectForm.desc_html_structure_pt =
        payload.desc_html_structure_pt;
      state.editProjectForm.summary_eng = payload.summary_eng;
      state.editProjectForm.summary_pt = payload.summary_pt;
      state.editProjectForm.start_date = payload.start_date;
      state.editProjectForm.end_date = payload.end_date;
      state.editProjectForm.project_contact = payload.project_contact;
      state.editProjectForm.project_email = payload.project_email;
      state.editProjectForm.pdf_path = payload.pdf_path;
      state.editProjectForm.coordinator = payload.coordinator;
    },
    SET_PROJECTS_EDIT_STATUS(state, payload) {
      state.editProjectStatus = payload.status;
    },
    SET_PROJECTS_DELETE_STATUS(state, payload) {
      state.deleteProjectStatus = payload.status;
    },
    SET_ADD_PROJECTS_IMGS_STATUS(state, payload) {
      state.addImgStatus = payload.status;
    },
    SET_ADD_PROJECTS_IMGS(state, payload) {
      state.images.push(payload.images);
    },
    SET_DELETE_PROJECT_IMG(state, payload) {
      state.selectedProjectImg = payload.id;
    },
    SET_DELETE_PROJECTS_IMG_STATUS(state, payload) {
      state.deleteImgStatus = payload.status;
    },
    SET_ADD_PROJECT_PARTNER_STATUS(state, payload) {
      state.addPartnerStatus = payload.status;
    },
    SET_ADD_PROJECT_PARTNER_FORM(state, payload) {
      state.addPartnerForm.investor = payload.investor;
      state.addPartnerForm.file = payload.file;
    },
    SET_DELETE_PROJECT_PARTNER_STATUS(state, payload) {
      state.deletePartnerStatus = payload.status;
    },
    SET_SELECTED_PARTNER_ID(state, payload) {
      state.selectedPartnerId = payload.id;
    },
    SET_ADD_PROJECT_NEWS_FORM(state, payload) {
      state.addNewsProjectForm.title_pt = payload.title_pt;
      state.addNewsProjectForm.title_eng = payload.title_eng;
      state.addNewsProjectForm.description_pt = payload.description_pt;
      state.addNewsProjectForm.description_eng = payload.description_eng;
      state.addNewsProjectForm.published_date = payload.published_date;
      state.addNewsProjectForm.file = payload.file;
    },
    SET_ADD_NEWS_PROJECT_STATUS(state, payload) {
      state.addNewsProjectStatus = payload.status;
    },
    SET_ADD_PROJECT_TEAM_STATUS(state, payload) {
      state.addProjectTeamStatus = payload.status;
    },
    SET_ADD_PROJECT_TEAM_FORM(state, payload) {
      state.addProjectTeamForm.user_id = payload.user_id;
      state.addProjectTeamForm.can_edit = payload.can_edit;
    },
    SET_EDIT_PROJECT_TEAM_FORM(state, payload) {
      state.editProjectTeamForm.user_id = payload.user_id;
      state.editProjectTeamForm.can_edit = payload.can_edit;
    },
    SET_DELETE_PROJECT_TEAM_STATUS(state, payload) {
      state.deleteTeamMemberStatus = payload.status;
    },
    SET_SELECTED_TEAM_MEMBER_ID(state, payload) {
      state.selectedTeamMemberId = payload.id;
    },
    SET_ADD_PROJECT_NEWS_STATUS(state, payload) {
      state.addProjectNewsStatus = payload.status;
    },

    // UNITS MUTATIONS
    SET_UNITS(state, payload) {
      state.units = payload.units;
    },
    SET_UNITS_ADD_STATUS(state, payload) {
      state.addUnitStatus = payload.status;
    },
    SET_UNITS_ADD_FORM(state, payload) {
      state.addUnitForm.file = payload.file;
      state.addUnitForm.designation = payload.designation;
      state.addUnitForm.description_pt = payload.description_pt;
      state.addUnitForm.description_eng = payload.description_eng;
    },
    SET_SELECTED_ADMIN_PROJECTS_ID(state, payload) {
      state.selectedProjectId = payload.id;
    },
    SET_UNITS_EDIT_FORM(state, payload) {
      state.editUnitForm.designation = payload.designation;
      state.editUnitForm.description_pt = payload.description_pt;
      state.editUnitForm.description_eng = payload.description_eng;
      state.editUnitForm.image = payload.image;
    },
    SET_UNITS_EDIT_STATUS(state, payload) {
      state.editUnitStatus = payload.status;
    },
    SET_UNITS_DELETE_STATUS(state, payload) {
      state.deleteUnitStatus = payload.status;
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
      commit(
        "SET_ADMIN_REMOVE_AREA_FOCUS_STATUS",
        await adminAreasConfig.deleteAreaFocus(
          JSON.parse(localStorage.getItem("token")),
          state.selectedAreaFocusId
        )
      );
    },
    async setAdminEditAreaFocusImg({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_AREA_FOCUS_ICON",
        await adminAreasConfig.editAreaFocusImg(
          JSON.parse(localStorage.getItem("token")),
          state.selectedAreaFocusId,
          state.focusImg
        )
      );
    },

    // CAREER ACTIONS
    async setAdminCareers({ commit }) {
      commit(
        "SET_ADMIN_CAREERS",
        await adminCareersConfig.getCareers(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminEditCareer({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_CAREERS_STATUS",
        await adminCareersConfig.editCareer(
          JSON.parse(localStorage.getItem("token")),
          state.selectedCareerId,
          state.editCareerForm.designation_pt,
          state.editCareerForm.designation_eng,
          state.editCareerForm.category_1,
          state.editCareerForm.category_2,
          state.editCareerForm.category_3,
          state.editCareerForm.desc_html_structure_pt,
          state.editCareerForm.desc_html_structure_eng,
          state.editCareerForm.pdf_path,
          state.editCareerForm.candidacy_link
        )
      );
    },
    async setAdminAddCareer({ commit, state }) {
      commit(
        "SET_ADMIN_ADD_CAREERS_STATUS",
        await adminCareersConfig.addCareer(
          JSON.parse(localStorage.getItem("token")),
          state.addCareerForm.designation_pt,
          state.addCareerForm.designation_eng,
          state.addCareerForm.category_1,
          state.addCareerForm.category_2,
          state.addCareerForm.category_3,
          state.addCareerForm.desc_html_structure_pt,
          state.addCareerForm.desc_html_structure_eng,
          state.addCareerForm.pdf_path,
          state.addCareerForm.candidacy_link
        )
      );
    },
    async setAdminDeleteCareer({ commit, state }) {
      commit(
        "SET_ADMIN_DELETE_CAREERS_STATUS",
        await adminCareersConfig.deleteCareer(
          JSON.parse(localStorage.getItem("token")),
          state.selectedCareerId
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
          state.editCourseForm.html_structure_pt,
          state.editCourseForm.coordinator
        )
      );
    },
    async setAdminAddCourse({ commit, state }) {
      commit(
        "SET_ADMIN_ADD_COURSE_STATUS",
        await adminCoursesConfig.addCourse(
          JSON.parse(localStorage.getItem("token")),
          state.addCourseForm.designation,
          state.addCourseForm.html_structure_eng,
          state.addCourseForm.html_structure_pt,
          state.addCourseForm.coordinator
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
    },

    // NEWS ACTIONS
    async setAdminNews({ commit }) {
      commit(
        "SET_ADMIN_NEWS",
        await adminNewsConfig.getNews(JSON.parse(localStorage.getItem("token")))
      );
    },
    async setAdminEditNews({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_NEWS_STATUS",
        await adminNewsConfig.editNews(
          JSON.parse(localStorage.getItem("token")),
          state.selectedNewsId,
          state.editNewsForm.title_pt,
          state.editNewsForm.title_eng,
          state.editNewsForm.description_pt,
          state.editNewsForm.description_eng,
          state.editNewsForm.published_date,
          state.editNewsForm.project_only
        )
      );
    },
    async setAdminEditNewsImg({ commit, state }) {
      commit(
        "SET_ADMIN_EDIT_NEWS_STATUS",
        await adminNewsConfig.editNewsImg(
          JSON.parse(localStorage.getItem("token")),
          state.selectedNewsId,
          state.editNewsForm.file
        )
      );
    },
    async setAdminAddNews({ commit, state }) {
      commit(
        "SET_ADMIN_ADD_NEWS_STATUS",
        await adminNewsConfig.addNews(
          JSON.parse(localStorage.getItem("token")),
          state.addNewsForm.file,
          state.addNewsForm.title_pt,
          state.addNewsForm.title_eng,
          state.addNewsForm.description_pt,
          state.addNewsForm.description_eng,
          state.addNewsForm.published_date
        )
      );
    },
    async setAdminDeleteNews({ commit, state }) {
      commit(
        "SET_ADMIN_DELETE_NEWS_STATUS",
        await adminNewsConfig.deleteNews(
          JSON.parse(localStorage.getItem("token")),
          state.selectedNewsId
        )
      );
    },

    // PROJECTS ACTIONS
    async setAdminProjects({ commit }) {
      commit(
        "SET_ADMIN_PROJECTS",
        await adminProjectsConfig.getProjects(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminAddProjects({ commit, state }) {
      commit(
        "SET_PROJECTS_ADD_STATUS",
        await adminProjectsConfig.addProject(
          JSON.parse(localStorage.getItem("token")),
          state.addProjectForm.title,
          state.addProjectForm.initials,
          state.addProjectForm.reference,
          state.addProjectForm.desc_html_structure_eng,
          state.addProjectForm.desc_html_structure_pt,
          state.addProjectForm.summary_eng,
          state.addProjectForm.summary_pt,
          state.addProjectForm.project_contact,
          state.addProjectForm.project_email,
          state.addProjectForm.start_date,
          state.addProjectForm.end_date,
          state.addProjectForm.pdf_path,
          state.addProjectForm.coordinator
        )
      );
    },
    async setAdminEditProjects({ commit, state }) {
      commit(
        "SET_PROJECTS_EDIT_STATUS",
        await adminProjectsConfig.editProject(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.editProjectForm.title,
          state.editProjectForm.initials,
          state.editProjectForm.reference,
          state.editProjectForm.desc_html_structure_eng,
          state.editProjectForm.desc_html_structure_pt,
          state.editProjectForm.summary_eng,
          state.editProjectForm.summary_pt,
          state.editProjectForm.project_contact,
          state.editProjectForm.project_email,
          state.editProjectForm.start_date,
          state.editProjectForm.end_date,
          state.editProjectForm.coordinator
        )
      );
    },
    async setAdminDeleteProject({ commit, state }) {
      commit(
        "SET_PROJECTS_DELETE_STATUS",
        await adminProjectsConfig.deleteProject(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId
        )
      );
    },
    async setAdminEditProjectPdf({ commit, state }) {
      commit(
        "SET_PROJECTS_EDIT_STATUS",
        await adminProjectsConfig.editProjectPdf(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.editProjectForm.pdf_path
        )
      );
    },
    async setAdminAddProjectImg({ commit, state }) {
      commit(
        "SET_ADD_PROJECTS_IMGS_STATUS",
        await adminProjectsConfig.addProjectImg(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.addProjectForm.images
        )
      );
    },
    async setAdminDeleteProjectImg({ commit, state }) {
      commit(
        "SET_DELETE_PROJECTS_IMG_STATUS",
        await adminProjectsConfig.deleteProjectImg(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.selectedProjectImg
        )
      );
    },
    async setAdminAddProjectPartner({ commit, state }) {
      commit(
        "SET_ADD_PROJECT_PARTNER_STATUS",
        await adminProjectsConfig.addPartner(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.addPartnerForm.investor,
          state.addPartnerForm.file
        )
      );
    },
    async setAdminDeleteProjectPartner({ commit, state }) {
      commit(
        "SET_DELETE_PROJECT_PARTNER_STATUS",
        await adminProjectsConfig.deletePartner(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.selectedPartnerId
        )
      );
    },
    async setAdminAddProjectNews({ commit, state }) {
      commit(
        "SET_ADD_PROJECT_NEWS_STATUS",
        await adminProjectsConfig.addProjectNews(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.addNewsProjectForm.title_pt,
          state.addNewsProjectForm.title_eng,
          state.addNewsProjectForm.description_pt,
          state.addNewsProjectForm.description_eng,
          state.addNewsProjectForm.published_date,
          state.addNewsProjectForm.file
        )
      );
    },
    async setAdminAddProjectTeam({ commit, state }) {
      commit(
        "SET_ADD_PROJECT_TEAM_STATUS",
        await adminProjectsConfig.addProjectTeam(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.addProjectTeamForm.user_id,
          state.addProjectTeamForm.can_edit
        )
      );
    },
    async setAdminEditProjectTeam({ commit, state }) {
      commit(
        "SET_ADD_PROJECT_TEAM_STATUS",
        await adminProjectsConfig.editProjectTeamMember(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.editProjectTeamForm.user_id,
          state.editProjectTeamForm.can_edit
        )
      );
    },
    async setAdminDeleteProjectTeam({ commit, state }) {
      commit(
        "SET_DELETE_PROJECT_TEAM_STATUS",
        await adminProjectsConfig.deleteProjectTeamMember(
          JSON.parse(localStorage.getItem("token")),
          state.selectedProjectId,
          state.selectedTeamMemberId
        )
      );
    },

    // UNITS ACTIONS
    async setAdminUnits({ commit }) {
      commit(
        "SET_UNITS",
        await adminUnitsConfig.getUnits(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    },
    async setAdminAddUnits({ commit, state }) {
      commit(
        "SET_UNITS_ADD_STATUS",
        await adminUnitsConfig.addUnit(
          JSON.parse(localStorage.getItem("token")),
          state.addUnitForm.file,
          state.addUnitForm.designation,
          state.addUnitForm.description_pt,
          state.addUnitForm.description_eng
        )
      );
    },
    async setAdminEditUnits({ commit, state }) {
      commit(
        "SET_UNITS_EDIT_STATUS",
        await adminUnitsConfig.editUnit(
          JSON.parse(localStorage.getItem("token")),
          state.selectedUnitId,
          state.editUnitForm.designation,
          state.editUnitForm.description_pt,
          state.editUnitForm.description_eng
        )
      );
    },
    async setAdminEditUnitImg({ commit, state }) {
      commit(
        "SET_UNITS_EDIT_STATUS",
        await adminUnitsConfig.editUnitImg(
          JSON.parse(localStorage.getItem("token")),
          state.selectedUnitId,
          state.editUnitForm.image
        )
      );
    },
    async setAdminDeleteUnit({ commit, state }) {
      commit(
        "SET_UNITS_DELETE_STATUS",
        await adminUnitsConfig.deleteUnit(
          JSON.parse(localStorage.getItem("token")),
          state.selectedUnitId
        )
      );
    }
  },
  getters: {
    getHeaderLinks: state => state.headerSvg,
    getAdminAreas: state => (state.areas != "" ? state.areas : []),
    getAdminAreasLength: state => {
      return state.areas != ""
        ? state.areas.length != undefined
          ? state.areas.length
          : 0
        : 0;
    },
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
    getAddAreaStatus: state => state.addAreaStatus,
    getEditAreaStatus: state => state.editAreaStatus,
    getDeleteAreaStatus: state => state.removeAreaStatus,

    // CAREERS GETTERS
    getAdminCareers: state => (state.careers != "" ? state.careers : []),
    getAdminCareersLength: state => {
      return state.careers != ""
        ? state.careers.length != undefined
          ? state.careers.length
          : 0
        : 0;
    },
    getAdminSelectedCareerId: state => state.selectedCareerId,
    getAdminCareerById: state => id =>
      state.careers.find(c => c.id_available_position === id),
    getAdminEditCareerStatus: state => state.editCareerStatus,
    getAdminAddCareerStatus: state => state.addCareerStatus,
    getAdminDeleteCareerStatus: state => state.deleteCareerStatus,

    // MEDIAS GETTERS
    getAdminMedias: state => (state.medias != "" ? state.medias : []),
    getAdminMediasLength: state => {
      return state.medias != ""
        ? state.medias.length != undefined
          ? state.medias.length
          : 0
        : 0;
    },
    getAdminSelectedMediaId: state => state.selectedMediaId,
    getAdminMediaById: state => id =>
      state.medias.find(media => media.id_media === id),
    getAddMediaStatus: state => state.addMediaStatus,
    getEditMediaStatus: state => state.editMediaStatus,
    getDeleteMediaStatus: state => state.removeMediaStatus,

    // COURSES GETTERS
    getAdminCourses: state => (state.courses != "" ? state.courses : []),
    getAdminCoursesLength: state => {
      return state.courses != ""
        ? state.courses.length != undefined
          ? state.courses.length
          : 0
        : 0;
    },
    getAdminSelectedCourseId: state => state.selectedCourseId,
    getAdminCourseById: state => id =>
      state.courses.find(course => course.id_course === id),
    getAddCourseStatus: state => state.addCourseStatus,
    getEditCourseStatus: state => state.editCourseStatus,
    getDeleteCourseStatus: state => state.removeCourseStatus,

    // NEWS GETTERS
    getAdminNews: state => (state.news != "" ? state.news : []),
    getAdminNewsLength: state => {
      return state.news != ""
        ? state.news.length != undefined
          ? state.news.length
          : 0
        : 0;
    },
    getAdminSelectedNewsId: state => state.selectedNewsId,
    getAdminNewsById: state => id => state.news.find(n => n.id_news === id),

    // PROJECTS GETTERS
    getAdminProjects: state => (state.projects != "" ? state.projects : []),
    getAdminProjectsLength: state => {
      return state.projects != ""
        ? state.projects.length != undefined
          ? state.projects.length
          : 0
        : 0;
    },
    getAdminSelectedProjectId: state => state.selectedProjectId,
    getAdminProjectById: state => id =>
      state.projects.find(project => project.id_project === id),
    getEditProjectStatus: state => state.editProjectStatus,
    getAddProjectStatus: state => state.addProjectStatus,
    getDeleteProjectStatus: state => state.deleteProjectStatus,
    getAddProjectImgStatus: state => state.addImgStatus,
    getAddProjectPartnerStatus: state => state.addPartnerStatus,
    getAddProjectNewsStatus: state => state.addProjectNewsStatus,

    // UNITS GETTERS
    getAdminUnits: state => (state.units != "" ? state.units : []),
    getAdminUnitsLength: state => {
      return state.units != ""
        ? state.units.length != undefined
          ? state.units.length
          : 0
        : 0;
    },
    getAdminSelectedUnitId: state => state.selectedUnitId,
    getAdminUnitById: state => id =>
      state.units.find(unit => unit.id_unity === id),
    getAddUnitStatus: state => state.addUnitStatus,
    getDeleteUnitStatus: state => state.deleteUnitStatus,
    getEditUnitStatus: state => state.editUnitStatus
  }
};
