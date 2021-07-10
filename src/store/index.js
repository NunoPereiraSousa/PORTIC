// import Cookies from "js-cookie";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { adminModule } from "./modules/adminModule";
import { areaModule } from "./modules/areasModule";
import { contactsModule } from "./modules/contactsModule";
import { connectionsModule } from "./modules/connectionsModule";
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
import { testimonialsModule } from "./modules/testimonialsModule";
import { adminEntitiesModule } from "./modules/adminEntitiesModule";

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
    testimonialsModule,
    projectsModule,
    careersModule,
    unityModule,
    usersModule,
    weatherModule,
    adminModule,
    connectionsModule,
    adminEntitiesModule
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
        "newsModule.news",
        "newsModule.selectedNewsId",
        "usersModule.token",
        "usersModule.selectedUserId",
        "usersModule.loggedUser",
        "usersModule.user",
        "unityModule.unities",
        "unityModule.selectedUnityId"
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
        "adminModule.selectedMediaId",
        "adminModule.courses",
        "adminModule.selectedCourseId",
        "adminModule.news",
        "adminModule.selectedNewsId",
        "adminModule.units",
        "adminModule.selectedUnitId",
        "adminModule.careers",
        "adminModule.selectedCareerId",
        "adminModule.projects",
        "adminModule.selectedProjectId",
        "usersModule.users",
        "usersModule.selectedUserId",
        "adminEntitiesModule.entities",
        "adminEntitiesModule.selectedEntityId"
      ]
    })
  ]
});
