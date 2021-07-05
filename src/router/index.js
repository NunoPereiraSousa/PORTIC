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
import DashboardMedia from "../views/Dashboard/DashboardMedia.vue";
import DashboardComponents from "../views/Dashboard/DashboardComponents.vue";
import DashboardAboutUs from "../views/Dashboard/DashboardAboutUs.vue";
import DashboardCareers from "../views/Dashboard/DashboardCareers.vue";
import DashboardCourses from "../views/Dashboard/DashboardCourses.vue";
import DashboardEditAreas from "../views/Dashboard/DashboardEditAreas.vue";
import DashboardEditCareers from "../views/Dashboard/DashboardEditCareers.vue";
import DashboardEditCourses from "../views/Dashboard/DashboardEditCourses.vue";
import DashboardAddMedia from "../views/Dashboard/DashboardAddMedia.vue";
import DashboardEditMedia from "../views/Dashboard/DashboardEditMedia.vue";
import DashboardEditProjects from "../views/Dashboard/DashboardEditProjects.vue";
import DashboardEditUnities from "../views/Dashboard/DashboardEditUnities.vue";
import DashboardAddPage from "../views/Dashboard/DashboardAddPage.vue";
import DashboardEditNews from "../views/Dashboard/DashboardEditNews.vue";
import DashboardHome from "../views/Dashboard/DashboardHome.vue";
import DashboardProjects from "../views/Dashboard/DashboardProjects.vue";
import DashboardUnities from "../views/Dashboard/DashboardUnities.vue";
import DashboardProfile from "../views/Dashboard/DashboardProfile.vue";
import DashboardUsers from "../views/Dashboard/DashboardUsers.vue";
import DashboardTN from "../views/Dashboard/DashboardTN.vue";
import DashboardProjectFiles from "../views/Dashboard/DashboardProjectFiles.vue";
import DashboardAddNews from "../views/Dashboard/DashboardAddNews.vue";
import DashboardAddProjectNews from "../views/Dashboard/DashboardAddProjectNews.vue";
import DashboardAreaConnection from "../views/Dashboard/DashboardAreaConnection.vue";
import DashboardUnitConnection from "../views/Dashboard/DashboardUnitConnection.vue";
import DashboardCourseConnection from "../views/Dashboard/DashboardCourseConnection.vue";
import DashboardProjectConnection from "../views/Dashboard/DashboardProjectConnection.vue";
import DashboardCareerConnection from "../views/Dashboard/DashboardCareerConnection.vue";
import SignIn from "../views/Dashboard/SignIn.vue";
import Register from "../views/Dashboard/Register.vue";
import Home from "../views/Home.vue";
import Media from "../views/Media.vue";
import NewsPage from "../views/NewsPage.vue";
import Positions from "../views/Positions.vue";
import Project from "../views/Project.vue";
import ProjectsCatalog from "../views/ProjectsCatalog.vue";
import SiteMap from "../views/SiteMap.vue";
import Unities from "../views/Unities.vue";
import UnitiesPage from "../views/UnitiesPage.vue";

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
    path: "/careers",
    name: "Positions",
    component: Positions
  },
  {
    path: "/projects-catalog",
    name: "ProjectsCatalog",
    component: ProjectsCatalog,
    props: true
  },
  {
    path: "/project/:id",
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
    path: "/unities/:name",
    name: "UnitiesPage",
    component: UnitiesPage
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/register",
    name: "Register",
    component: Register
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
    path: "/dashboard-about-us",
    name: "DashboardAboutUs",
    component: DashboardAboutUs
  },
  {
    path: "/dashboard-components",
    name: "DashboardComponents",
    component: DashboardComponents
  },
  {
    path: "/dashboard-media",
    name: "DashboardMedia",
    component: DashboardMedia
  },
  {
    path: "/dashboard-add-media",
    name: "DashboardAddMedia",
    component: DashboardAddMedia
  },
  {
    path: "/dashboard-edit-media/:name",
    name: "DashboardEditMedia",
    component: DashboardEditMedia,
    props: true
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
    path: "/dashboard-tn",
    name: "DashboardTN",
    component: DashboardTN
  },
  {
    path: "/dashboard-edit-tn",
    name: "DashboardEditNews",
    component: DashboardEditNews
  },
  {
    path: "/dashboard/:fullName",
    name: "DashboardProfile",
    component: DashboardProfile
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
  },
  {
    path: "/dashboard-page",
    name: "DashboardAddPage",
    component: DashboardAddPage
  },
  {
    path: "/dashboard-project-files",
    name: "DashboardProjectFiles",
    component: DashboardProjectFiles
  },
  {
    path: "/dashboard-add-news",
    name: "DashboardAddNews",
    component: DashboardAddNews
  },
  {
    path: "/dashboard-add-project-news",
    name: "DashboardAddProjectNews",
    component: DashboardAddProjectNews
  },
  {
    path: "/dashboard-area-connections/:name",
    name: "DashboardAreaConnection",
    component: DashboardAreaConnection,
    props: true
  },
  {
    path: "/dashboard-unit-connections/:name",
    name: "DashboardUnitConnection",
    component: DashboardUnitConnection,
    props: true
  },
  {
    path: "/dashboard-course-connections/:name",
    name: "DashboardCourseConnection",
    component: DashboardCourseConnection,
    props: true
  },
  {
    path: "/dashboard-project-connections/:name",
    name: "DashboardProjectConnection",
    component: DashboardProjectConnection,
    props: true
  },
  {
    path: "/dashboard-career-connections/:name",
    name: "DashboardCareerConnection",
    component: DashboardCareerConnection,
    props: true
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
