import { usersConfig } from "../../config/api/users";
// import { entityModule } from "./entityModule";

export const usersModule = {
  state: {
    users: [],
    token: null,
    loggedUser: null,
    loginForm: {
      input: null,
      password: null
    },
    signInStatus: null,
    dataBody: {
      selectedLang: null
    }
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload.users;
    },
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload.user;
      state.token = payload.token;
      state.signInStatus = payload.status;
    },
    SET_LOGIN_FORM(state, payload) {
      state.loginForm.username = payload.username;
      state.loginForm.password = payload.password;
    }
  },
  actions: {
    async setLoggedUser({ commit, state }) {
      commit(
        "SET_LOGGED_USER",
        await usersConfig.singIn(
          state.loginForm.username,
          state.loginForm.password
        )
      );
    }
  },
  getters: {
    getUsers: state => {
      return state.users != "" ? state.users : [];
    },
    getNUsers: state => {
      return state.users.length;
    },
    getLoggedUser: state => state.loggedUser,
    getLoginStatus: state => state.signInStatus,
    getLoginToken: state => state.token
  }
};
