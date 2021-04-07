import Vue from "vue";
import Vuex from "vuex";
import { areaModule } from "./modules/areasModule";
import { contactsModule } from "./modules/contactsModule";
import { coursesModule } from "./modules/coursesModule";
import { mediaModule } from "./modules/mediaModule";
import { newsModule } from "./modules/newsModule";
import { projectsModule } from "./modules/projectsModule";
import { recruitmentModule } from "./modules/recruitmentModule";
import { unityModule } from "./modules/unitiesModule";

Vue.use(Vuex);

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
  getters: {}
});
