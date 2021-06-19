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
    registerForm: {
      username: null,
      firstName: null,
      password: null,
      lastName: null,
      email: null,
      phoneNumber: null
    },
    signInStatus: null,
    signUpStatus: null,
    dataBody: {
      selectedLang: null
    }
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload.users;
      state.signUpStatus = payload.status;
    },
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload.user;
      state.token = payload.token;
      state.signInStatus = payload.status;

      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    SET_LOGIN_FORM(state, payload) {
      state.loginForm.username = payload.username;
      state.loginForm.password = payload.password;
    },
    SET_REGISTER_FORM(state, payload) {
      state.registerForm.username = payload.username;
      state.registerForm.firstName = payload.firstName;
      state.registerForm.password = payload.password;
      state.registerForm.lastName = payload.lastName;
      state.registerForm.email = payload.email;
      state.registerForm.phoneNumber = payload.phoneNumber;
    },
    SET_REGISTER_STATUS(state, payload) {
      state.signUpStatus = payload.status;
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
    },
    async setRegisterUser({ commit, state }) {
      commit(
        "SET_REGISTER_STATUS",
        await usersConfig.singUp(
          state.registerForm.username,
          state.registerForm.firstName,
          state.registerForm.password,
          state.registerForm.lastName,
          state.registerForm.email,
          state.registerForm.phoneNumber
        )
      );
    },
    async setUsers({ commit, state }) {
      commit("SET_USERS", await usersConfig.getUsers(state.token));
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
    getLoginToken: state => state.token,
    getRegisterStatus: state => state.signUpStatus,
    getUserByUsername: state => username =>
      state.users.find(user => user.username === username),
    getUserByUsernameAndEmail: state => username => email =>
      state.users.find(
        user => user.username === username && user.email === email
      )
  }
};
