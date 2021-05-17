import Vue from "vue";
import VueRouter from "vue-router";
import Areas from "../views/Areas.vue";
import Contacts from "../views/Contacts.vue";
import Courses from "../views/Courses.vue";
import DashboardAddAreas from "../views/Dashboard/DashboardAddAreas.vue";
import DashboardAddCareers from "../views/Dashboard/DashboardAddCareers.vue";
import DashboardAddCourses from "../views/Dashboard/DashboardAddCourses.vue";
import DashboardAddProjects from "../views/Dashboard/DashboardAddProjects.vue";
import DashboardAddUnities from "../views/Dashboard/DashboardAddUnities.vue";
import DashboardAddUsers from "../views/Dashboard/DashboardAddUsers.vue";
import DashboardAreas from "../views/Dashboard/DashboardAreas.vue";
import DashboardCareers from "../views/Dashboard/DashboardCareers.vue";
import DashboardCourses from "../views/Dashboard/DashboardCourses.vue";
import DashboardEditAreas from "../views/Dashboard/DashboardEditAreas.vue";
import DashboardEditCareers from "../views/Dashboard/DashboardEditCareers.vue";
import DashboardEditCourses from "../views/Dashboard/DashboardEditCourses.vue";
import DashboardEditProjects from "../views/Dashboard/DashboardEditProjects.vue";
import DashboardEditUnities from "../views/Dashboard/DashboardEditUnities.vue";
import DashboardHome from "../views/Dashboard/DashboardHome.vue";
import DashboardProjects from "../views/Dashboard/DashboardProjects.vue";
import DashboardUnities from "../views/Dashboard/DashboardUnities.vue";
import DashboardUsers from "../views/Dashboard/DashboardUsers.vue";
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
    path: "/dashboard-add-projects",
    name: "DashboardAddProjects",
    component: DashboardAddProjects
  },
  {
    path: "/dashboard-edit-projects/:name",
    name: "DashboardEditProjects",
    component: DashboardEditProjects,
    props: true
  },
  {
    path: "/dashboard-careers",
    name: "DashboardCareers",
    component: DashboardCareers
  },
  {
    path: "/dashboard-edit-careers/:name",
    name: "DashboardEditCareers",
    component: DashboardEditCareers,
    props: true
  },
  {
    path: "/dashboard-add-careers",
    name: "DashboardAddCareers",
    component: DashboardAddCareers
  },
  {
    path: "/dashboard-unities",
    name: "DashboardUnities",
    component: DashboardUnities
  },
  {
    path: "/dashboard-add-unities",
    name: "DashboardAddUnities",
    component: DashboardAddUnities
  },
  {
    path: "/dashboard-edit-unities/:name",
    name: "DashboardEditUnities",
    component: DashboardEditUnities,
    props: true
  },
  {
    path: "/dashboard-users",
    name: "DashboardUsers",
    component: DashboardUsers
  },
  {
    path: "/dashboard-add-users",
    name: "DashboardAddUsers",
    component: DashboardAddUsers
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
