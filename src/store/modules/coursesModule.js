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
    iconCoursesCardsPT: iconCoursesCardsPT
  },
  mutations: {},
  actions: {},
  getters: {
    getCoursesPT: state => state.coursesPT,
    getCoursesEN: state => state.coursesEN,
    getNCourses: state => state.coursesPT.length,
    getIconCoursesCardsEN: state => state.iconCoursesCardsEN,
    getIconCoursesCardsPT: state => state.iconCoursesCardsPT
  }
};
