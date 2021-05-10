import { projects } from "../../config/projects";

export const projectsModule = {
  state: {
    projects: projects,
    selectedProject: null,
    selectedId: null
  },
  mutations: {
    SET_SELECTED_PROJECT(state, payload) {
      state.selectedProject = payload.initials;
    },
    SET_SELECTED_PROJECT_ID(state, payload) {
      state.selectedId = payload.id;
    }
  },
  actions: {},
  getters: {
    getProjects: state => state.projects,
    getNProjects: state => state.projects.length,
    getSelectedProject: state => state.selectedProject,
    getProjectByName: state => initials =>
      state.projects.find(p => p.initials === initials),
    getSelectedProjectByID: state => state.selectedId,
    getProjectByID: state => id => state.projects.find(n => n.id == id)
  }
};
