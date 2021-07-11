import { testimonialsConfig } from "../../config/api/testimonials";

export const testimonialsModule = {
  state: {
    reviews: [],
    dataBody: {
      selectedLang: ""
    },
    status: null
  },
  mutations: {
    SET_REVIEWS(state, payload) {
      state.reviews = payload.testimonials;
      state.status = payload.status;
    },
    SET_SELECTED_REVIEWS_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setReviews({ commit, state }) {
      commit(
        "SET_REVIEWS",
        await testimonialsConfig.getTestimonials(
          state.dataBody.selectedLang,
          JSON.parse(localStorage.getItem("vuex")).entityModule.entityId
        )
      );
    }
  },
  getters: {
    getTestimonials: state => {
      return state.reviews != "" ? state.reviews : [];
    },
    getReviewsStatus: state => state.status
  }
};
