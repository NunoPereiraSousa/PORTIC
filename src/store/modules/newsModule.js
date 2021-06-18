import { newsConfig } from "../../config/api/news";
import { entityModule } from "./entityModule";

export const newsModule = {
  state: {
    news: [],
    selectedNewsId: null,
    selectedNewsTitle: null,
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload.news;

      localStorage.setItem("news", JSON.stringify(state.news));
    },
    SET_SELECTED_NEWS_ID(state, payload) {
      state.selectedNewsId = payload.id;
    },
    SET_SELECTED_NEWS(state, payload) {
      state.selectedNewsTitle = payload.title;
    },
    SET_SELECTED_NEWS_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setNews({ commit, state }) {
      commit(
        "SET_NEWS",
        await newsConfig.getNews(
          state.dataBody.selectedLang,
          entityModule.state.entityId
        )
      );
    }
  },
  getters: {
    getNews: state => {
      return state.news != "" ? state.news : [];
    },
    getNewsById: state => id => state.news.find(n => n.id_news == id),
    getSelectedNewsId: state => state.selectedNewsId,
    getSelectedNewsTitle: state => state.selectedNewsTitle
  }
};
