import { coursesConfig } from "../../config/api/courses";
import { entityModule } from "./entityModule";

export const coursesModule = {
  state: {
    courses: [],
    selectedId: null,
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_SELECTED_COURSE_ID(state, payload) {
      state.selectedId = payload.id;
    },
    SET_COURSES(state, payload) {
      state.courses = payload.courses;
      state.dataStatus = payload.status;
    },
    SET_SELECTED_COURSES_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setCourses({ commit, state }) {
      commit(
        "SET_COURSES",
        await coursesConfig.getCourses(
          state.dataBody.selectedLang,
          entityModule.state.entityId
        )
      );
    }
  },
  getters: {
    getCourses: state => {
      return state.courses != "" ? state.courses : [];
    },
    getCoursesLength: state => {
      return state.courses != ""
        ? state.courses.length != undefined
          ? state.courses.length
          : 0
        : 0;
    },
    getSelectedCourseByID: state => state.selectedId,
    getCourseByID: state => id => state.courses.find(n => n.id_course == id)
  }
};
