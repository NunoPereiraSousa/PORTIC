export const langModule = {
  state: {
    lang: "pt"
  },
  mutations: {
    SET_LOCALE(state, payload) {
      state.lang = payload;

      //   localStorage.setItem("lang", JSON.stringify(state.lang));
    }
  },
  actions: {},
  getters: {
    getCurrLang: state => state.lang
  }
};
