import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import ProjectsCatalog from "../views/ProjectsCatalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/projects-catalog",
    name: "ProjectsCatalog",
    component: ProjectsCatalog
  }
];

const router = new VueRouter({
  routes
});

export default router;
