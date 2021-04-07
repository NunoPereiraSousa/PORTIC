import { projects } from "../../config/projects";

export const projectsModule = {
  state: {
    projects: projects,
    selectedProject: null
  },
  mutations: {
    SET_SELECTED_PROJECT(state, payload) {
      state.selectedProject = payload.initials;
      localStorage.setItem(
        "project_name",
        JSON.stringify(state.selectedProject)
      );
    }
  },
  actions: {},
  getters: {
    getProjects: state => state.projects,
    getSelectedProject: state => state.selectedProject,
    getProjectByName: state => initials =>
      state.projects.find(p => p.initials === initials)
  }
};
