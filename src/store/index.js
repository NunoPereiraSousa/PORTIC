import Cookies from "js-cookie";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { areaModule } from "./modules/areasModule";
import { contactsModule } from "./modules/contactsModule";
import { coursesModule } from "./modules/coursesModule";
import { mediaModule } from "./modules/mediaModule";
import { newsModule } from "./modules/newsModule";
import { projectsModule } from "./modules/projectsModule";
import { recruitmentModule } from "./modules/recruitmentModule";
import { unityModule } from "./modules/unitiesModule";

Vue.use(Vuex);

// const selectedProjectState = createPersistedState({
//   paths: ["selectedProject"]
// });

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    areaModule,
    contactsModule,
    coursesModule,
    mediaModule,
    newsModule,
    projectsModule,
    recruitmentModule,
    unityModule
  },
  getters: {},
  plugins: [
    createPersistedState({
      paths: ["projectsModule.selectedProject"],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
