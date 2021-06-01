import { entityConfig } from "../../config/api/entity";

export const entityModule = {
  state: {
    lang: "pt",
    data: [],
    dataStatus: "",
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload.data;
      state.dataStatus = payload.status;
    }
  },
  actions: {
    async setData(state) {
      state.state.dataBody.selectedLang = state.state.lang;

      state.commit(
        "SET_DATA",
        await entityConfig.getEntityData(state.state.dataBody.selectedLang)
      );
    }
  },
  getters: {
    getEntityData: state => state.data,
    getEntityDataStatus: state => state.dataStatus
  }
};
