import Vue from "vue";
import VueRouter from "vue-router";
import Areas from "../views/Areas.vue";
import Contacts from "../views/Contacts.vue";
import Courses from "../views/Courses.vue";
import Home from "../views/Home.vue";
import Media from "../views/Media.vue";
import Positions from "../views/Positions.vue";
import Project from "../views/Project.vue";
import Projects from "../views/Projects.vue";
import ProjectsCatalog from "../views/ProjectsCatalog.vue";
import Unities from "../views/Unities.vue";

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
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/media",
    name: "Media",
    component: Media
  },
  {
    path: "/positions",
    name: "Positions",
    component: Positions
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
  },
  {
    path: "/project/:name",
    name: "Project",
    component: Project,
    props: true
  },
  {
    path: "/unities",
    name: "Unities",
    component: Unities
  }
];

const router = new VueRouter({
  routes
});

export default router;
