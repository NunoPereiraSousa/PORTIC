import { mediasEN, mediasPT } from "../../config/media";

export const mediaModule = {
  state: {
    mediasPT: mediasPT,
    mediasEN: mediasEN
  },
  mutations: {},
  actions: {},
  getters: {
    getMediasPT: state => state.mediasPT,
    getMediasEN: state => state.mediasEN,
    getNMedias: state => state.mediasPT.length
  }
};
