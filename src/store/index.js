// import Cookies from "js-cookie";
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
import { careersModule } from "./modules/careersModule";
import { unityModule } from "./modules/unitiesModule";
import { weatherModule } from "./modules/weatherModule";
import { entityModule } from "./modules/entityModule";
import { usersModule } from "./modules/usersModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    entityModule,
    areaModule,
    contactsModule,
    coursesModule,
    langModule,
    mediaModule,
    newsModule,
    projectsModule,
    careersModule,
    unityModule,
    usersModule,
    weatherModule,
    adminModule
  },
  getters: {},
  plugins: [
    createPersistedState({
      paths: [
        "entityModule.entityId",
        "entityModule.menus",
        "entityModule.selectedMenuId",
        "projectsModule.projects",
        "projectsModule.selectedId",
        "langModule.lang",
        "newsModule.selectedNewsId",
        "newsModule.news",
        "usersModule.token",
        "usersModule.loggedUser",
        "usersModule.user"
      ]
      //   storage: {
      //     getItem: key => {
      //       console.log(Cookies.get(key));
      //       return Cookies.get(key);
      //     },
      //     setItem: (key, value) =>
      //       Cookies.set(key, value, { expires: 3, secure: true }),
      //     removeItem: key => Cookies.remove(key)
      //   }
    }),
    createPersistedState({
      key: "vuex_admin_areas",
      paths: [
        "adminModule.areas",
        "adminModule.selectedAreaId",
        "adminModule.medias",
        "adminModule.selectedMediaId"
      ]
    })
  ]
});
