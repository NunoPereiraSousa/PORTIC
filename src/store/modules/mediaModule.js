import { mediasConfig } from "../../config/api/medias";
import { entityModule } from "./entityModule";

export const mediaModule = {
  state: {
    medias: [],
    // mediasPT: mediasPT,
    // mediasEN: mediasEN,
    selectedId: null,
    dataBody: {
      selectedLang: ""
    }
  },
  mutations: {
    SET_SELECTED_MEDIA_ID(state, payload) {
      state.selectedId = payload.id;
    },
    SET_MEDIAS(state, payload) {
      state.medias = payload.medias;
      state.dataStatus = payload.status;
    },
    SET_SELECTED_MEDIAS_LANG(state, payload) {
      state.dataBody.selectedLang = payload.lang;
    }
  },
  actions: {
    async setMedias({ commit, state }) {
      commit(
        "SET_MEDIAS",
        await mediasConfig.getMedias(
          state.dataBody.selectedLang,
          entityModule.state.entityId
        )
      );
    }
  },
  getters: {
    getMediasPT: state => state.mediasPT,
    getMediasEN: state => state.mediasEN,
    getMedias: state => {
      return state.medias != "" ? state.medias : [];
    },
    getMediasLength: state => {
      return state.medias != ""
        ? state.medias.length != undefined
          ? state.medias.length
          : 0
        : 0;
    },
    getNMedias: state => state.mediasPT.length,
    getSelectedMediaByID: state => state.selectedId,
    getMediaByID: state => id => state.mediasPT.find(n => n.id == id)
  }
};
