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
    user: {},
    userStatus: null,
    userImgStatus: null,
    signInStatus: null,
    signUpStatus: null,
    dataBody: {
      selectedLang: null
    },
    editProfileForm: {
      username: null,
      description_pt: null,
      description_eng: null,
      email: null,
      phone_numb: null,
      facebook_url: null,
      linkedIn_url: null,
      full_name: null
    },
    editProfileStatus: null
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload.users;
      state.signUpStatus = payload.status;

      localStorage.setItem("users", JSON.stringify(state.users));
    },
    SET_USER(state, payload) {
      state.user = payload.user;
      state.userStatus = payload.status;

      console.log(state.user, state.userStatus);
    },
    SET_USER_IMG_STATUS(state, payload) {
      state.userImgStatus = payload.status;
    },
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload.user;
      state.token = payload.token;
      state.signInStatus = payload.status;

      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    SET_TOKEN(state, payload) {
      state.token = payload.token;

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
    },
    SET_EDIT_PROFILE_STATUS(state, payload) {
      state.editProfileStatus = payload.status;
    },
    SET_EDIT_PROFILE_FORM(state, payload) {
      state.editProfileForm.username = payload.username;
      state.editProfileForm.description_pt = payload.description_pt;
      state.editProfileForm.description_eng = payload.description_eng;
      state.editProfileForm.email = payload.email;
      state.editProfileForm.phone_numb = payload.phone_numb;
      state.editProfileForm.facebook_url = payload.facebook_url;
      state.editProfileForm.linkedIn_url = payload.linkedIn_url;
      state.editProfileForm.full_name = payload.fullName;
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
    },
    async setUser({ commit, state }) {
      commit("SET_USER", await usersConfig.getProfileData(state.token));
    },
    async setEditProfile({ commit, state }) {
      commit(
        "SET_EDIT_PROFILE_STATUS",
        await usersConfig.editProfile(
          state.token,
          state.editProfileForm.username,
          state.editProfileForm.description_pt,
          state.editProfileForm.description_eng,
          state.editProfileForm.email,
          state.editProfileForm.phone_numb,
          state.editProfileForm.facebook_url,
          state.editProfileForm.linkedIn_url,
          state.editProfileForm.full_name
        )
      );
    },
    async setUserImg({ commit, state }) {
      commit(
        "SET_USER_IMG_STATUS",
        await usersConfig.editProfileImg(state.token, state.userImg)
      );
    }
  },
  getters: {
    getUsers: state => {
      return state.users != "" ? state.users : [];
    },
    getUser: state => {
      return state.user != "" ? state.user : "";
    },
    getUserStatus: state => {
      return state.userStatus != "" ? state.userStatus : "";
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
