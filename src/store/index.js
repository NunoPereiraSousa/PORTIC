import Cookies from "js-cookie";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { adminModule } from "./modules/adminModule";
import { areaModule } from "./modules/areasModule";
import { contactsModule } from "./modules/contactsModule";
import { coursesModule } from "./modules/coursesModule";
import { langModule } from "./modules/langModule";
import { mediaModule } from "./modules/mediaModule";
import { newsModule } from "./modules/newsModule";
import { projectsModule } from "./modules/projectsModule";
import { recruitmentModule } from "./modules/recruitmentModule";
import { unityModule } from "./modules/unitiesModule";
import { weatherModule } from "./modules/weatherModule";

Vue.use(Vuex);

// const selectedProjectState = createPersistedState({
//   paths: ["selectedProject"]
// });

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    adminModule,
    areaModule,
    contactsModule,
    coursesModule,
    langModule,
    mediaModule,
    newsModule,
    projectsModule,
    recruitmentModule,
    unityModule,
    weatherModule
  },
  getters: {},
  plugins: [
    createPersistedState({
      paths: ["projectsModule.selectedProject", "langModule.lang"],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
