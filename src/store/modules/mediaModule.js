import { medias } from "../../config/media";

export const mediaModule = {
  state: {
    medias: medias
  },
  mutations: {},
  actions: {},
  getters: {
    getMedias: state => state.medias,
    getNMedias: state => state.medias.length
  }
};
