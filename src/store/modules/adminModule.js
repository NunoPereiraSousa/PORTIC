import { headerSvg } from "../../config/admin_header";

export const adminModule = {
  state: {
    headerSvg: headerSvg
  },
  mutations: {},
  actions: {},
  getters: {
    getHeaderLinks: state => state.headerSvg
  }
};
