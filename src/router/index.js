import Vue from "vue";
import VueRouter from "vue-router";
import Areas from "../views/Areas.vue";
import Contacts from "../views/Contacts.vue";
import Courses from "../views/Courses.vue";
import DashboardAddAreas from "../views/Dashboard/DashboardAddAreas.vue";
import DashboardAddCourses from "../views/Dashboard/DashboardAddCourses.vue";
import DashboardAreas from "../views/Dashboard/DashboardAreas.vue";
import DashboardCourses from "../views/Dashboard/DashboardCourses.vue";
import DashboardEditAreas from "../views/Dashboard/DashboardEditAreas.vue";
import DashboardEditCourses from "../views/Dashboard/DashboardEditCourses.vue";
import DashboardHome from "../views/Dashboard/DashboardHome.vue";
import DashboardProjects from "../views/Dashboard/DashboardProjects.vue";
import DashboardUnities from "../views/Dashboard/DashboardUnities.vue";
import Home from "../views/Home.vue";
import Media from "../views/Media.vue";
import NewsPage from "../views/NewsPage.vue";
import Positions from "../views/Positions.vue";
import Project from "../views/Project.vue";
import Projects from "../views/Projects.vue";
import ProjectsCatalog from "../views/ProjectsCatalog.vue";
import SiteMap from "../views/SiteMap.vue";
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
    path: "/news/:name",
    name: "NewsPage",
    component: NewsPage,
    props: true
  },
  {
    path: "/site-map",
    name: "SiteMap",
    component: SiteMap
  },
  {
    path: "/unities",
    name: "Unities",
    component: Unities
  },
  {
    path: "/dashboard",
    name: "DashboardHome",
    component: DashboardHome
  },
  {
    path: "/dashboard-areas",
    name: "DashboardAreas",
    component: DashboardAreas
  },
  {
    path: "/dashboard-edit-areas/:name",
    name: "DashboardEditAreas",
    component: DashboardEditAreas,
    props: true
  },
  {
    path: "/dashboard-add-areas",
    name: "DashboardAddAreas",
    component: DashboardAddAreas
  },
  {
    path: "/dashboard-courses",
    name: "DashboardCourses",
    component: DashboardCourses
  },
  {
    path: "/dashboard-edit-courses/:name",
    name: "DashboardEditCourses",
    component: DashboardEditCourses,
    props: true
  },
  {
    path: "/dashboard-add-courses",
    name: "DashboardAddCourses",
    component: DashboardAddCourses
  },
  {
    path: "/dashboard-projects",
    name: "DashboardProjects",
    component: DashboardProjects
  },
  {
    path: "/dashboard-unities",
    name: "DashboardUnities",
    component: DashboardUnities
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
