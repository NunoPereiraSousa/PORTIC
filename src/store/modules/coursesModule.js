import {
  coursesEN,
  coursesPT,
  iconCoursesCardsEN,
  iconCoursesCardsPT
} from "../../config/courses";

export const coursesModule = {
  state: {
    coursesPT: coursesPT,
    coursesEN: coursesEN,
    iconCoursesCardsEN: iconCoursesCardsEN,
    iconCoursesCardsPT: iconCoursesCardsPT,
    selectedId: null
  },
  mutations: {
    SET_SELECTED_COURSE_ID(state, payload) {
      state.selectedId = payload.id;
    }
  },
  actions: {},
  getters: {
    getCoursesPT: state => state.coursesPT,
    getCoursesEN: state => state.coursesEN,
    getNCourses: state => state.coursesPT.length,
    getIconCoursesCardsEN: state => state.iconCoursesCardsEN,
    getIconCoursesCardsPT: state => state.iconCoursesCardsPT,
    getSelectedCourseByID: state => state.selectedId,
    getCourseByID: state => id => state.coursesPT.find(n => n.id == id)
  }
};
