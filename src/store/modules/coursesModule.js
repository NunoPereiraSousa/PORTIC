import { courses, iconCoursesCards } from "../../config/courses";

export const coursesModule = {
  state: {
    courses: courses,
    iconCoursesCards: iconCoursesCards
  },
  mutations: {},
  actions: {},
  getters: {
    getCourses: state => state.courses,
    getNCourses: state => state.courses.length,
    getIconCoursesCards: state => state.iconCoursesCards
  }
};
