import { mediasEN, mediasPT } from "../../config/media";

export const mediaModule = {
  state: {
    mediasPT: mediasPT,
    mediasEN: mediasEN,
    selectedId: null
  },
  mutations: {
    SET_SELECTED_MEDIA_ID(state, payload) {
      state.selectedId = payload.id;
    }
  },
  actions: {},
  getters: {
    getMediasPT: state => state.mediasPT,
    getMediasEN: state => state.mediasEN,
    getNMedias: state => state.mediasPT.length,
    getSelectedMediaByID: state => state.selectedId,
    getMediaByID: state => id => state.mediasPT.find(n => n.id == id)
  }
};
