import { focuses } from "../../config/contacts";

export const contactsModule = {
  state: { focuses: focuses },
  mutations: {},
  actions: {},
  getters: { getFocuses: state => state.focuses }
};
