import { weatherConfig } from "../../config/api/weather";

export const weatherModule = {
  state: {
    weather: []
  },
  mutations: {
    SET_WEATHER(state, payload) {
      state.weather = payload.weather;
    }
  },
  actions: {
    async setWeather(state) {
      state.commit("SET_WEATHER", await weatherConfig.getCurrentWeather());
    }
  },
  getters: {
    getWeather: state => state.weather
  }
};
