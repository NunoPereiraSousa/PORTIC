import { news } from "../../config/news";

export const newsModule = {
  state: {
    news: news,
    selectedNewsId: null,
    selectedNewsTitle: null
  },
  mutations: {
    SET_SELECTED_NEWS_ID(state, payload) {
      state.selectedNewsId = payload.id;

      console.log(state.selectedNewsId);
      console.log(payload.id);
    },
    SET_SELECTED_NEWS(state, payload) {
      state.selectedNewsTitle = payload.title;
    }
  },
  actions: {},
  getters: {
    getNews: state => state.news,
    getNewsById: state => id => state.news.find(n => n.id == id),
    getSelectedNewsId: state => state.selectedNewsId,
    getSelectedNewsTitle: state => state.selectedNewsTitle
  }
};
