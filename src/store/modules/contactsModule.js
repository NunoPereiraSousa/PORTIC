import { focusesEN, focusesPT } from "../../config/contacts";

export const contactsModule = {
  state: { focusesPT: focusesPT, focusesEN: focusesEN },
  mutations: {},
  actions: {},
  getters: {
    getFocusesPT: state => state.focusesPT,
    getFocusesEN: state => state.focusesEN
  }
};
