import { adminEntitiesConfig } from "../../config/api/adminEntities";

export const adminEntitiesModule = {
  state: {
    initials: {},
    newUserEntity: null,
    newUserEntityStatus: null
  },
  mutations: {
    SET_ENTITY_INITIALS(state, payload) {
      state.initials = payload.initials;
    }
  },
  actions: {
    async setEntityInitials({ commit }) {
      commit(
        "SET_ENTITY_INITIALS",
        await adminEntitiesConfig.getEntitiesInitials(
          JSON.parse(localStorage.getItem("token"))
        )
      );
    }
  },
  getters: {
    getEntityInitials: state => (state.initials != "" ? state.initials : {})
  }
};
