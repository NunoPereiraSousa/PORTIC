import { news } from "../../config/news";

export const newsModule = {
  state: {
    news: news,
    selectedNewsId: null
  },
  mutations: {
    SET_SELECTED_NEWS_ID(state, payload) {
      state.selectedNewsId = payload.id;
    }
  },
  actions: {},
  getters: {
    getNews: state => state.news,
    getNewsById: state => id => state.news.find(n => n.id == id),
    getSelectedNewsId: state => state.selectedNewsId
  }
};
