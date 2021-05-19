import {
  focusesEN,
  focusesPT,
  socials,
  description,
  contacts,
  mapCoordinates
} from "../../config/contacts";

export const contactsModule = {
  state: {
    focusesPT: focusesPT,
    focusesEN: focusesEN,
    socials: socials,
    description: description,
    contacts: contacts,
    mapCoordinates: mapCoordinates,
    selectedId: -1
  },
  mutations: {
    SET_SELECTED_FOCUS_ID(state, payload) {
      state.selectedId = payload.id;
    }
  },
  actions: {},
  getters: {
    getFocusesPT: state => state.focusesPT,
    getFocusesEN: state => state.focusesEN,
    getSocials: state => state.socials,
    getDescription: state => state.description,
    getContacts: state => state.contacts,
    getCoordinates: state => state.mapCoordinates,
    getSelectedFocusByID: state => state.selectedId,
    getFocusByID: state => id => state.focusesPT.find(focus => focus.id === id)
  }
};
