import Vue from "vue";
import VueRouter from "vue-router";
import Areas from "../views/Areas.vue";
import Courses from "../views/Courses.vue";
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
    path: "/areas",
    name: "Areas",
    component: Areas
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/projects-catalog",
    name: "ProjectsCatalog",
    component: ProjectsCatalog,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
