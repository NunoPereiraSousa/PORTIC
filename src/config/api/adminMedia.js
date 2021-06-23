import axios from "axios";

import { API_URL } from "./config";

export const adminMediasConfig = {
  getMedias: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };
    return await axios
      .get(`${API_URL}/media`, config)
      .then(response => {
        return {
          medias: response.data.processResult[0],
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  editMedia: async (
    token,
    id,
    title_eng,
    title_pt,
    description_pt,
    description_eng,
    appearance_case,
    youtube_path
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .put(
        `${API_URL}/media/${id}`,
        {
          title_eng: title_eng,
          title_pt: title_pt,
          description_pt: description_pt,
          description_eng: description_eng,
          appearance_case: appearance_case,
          youtube_path: youtube_path
        },
        config
      )
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  addMedia: async (
    token,
    title_eng,
    title_pt,
    description_pt,
    description_eng,
    appearance_case,
    youtube_path
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(
        `${API_URL}/media`,
        {
          title_eng: title_eng,
          title_pt: title_pt,
          description_pt: description_pt,
          description_eng: description_eng,
          appearance_case: appearance_case,
          youtube_path: youtube_path
        },
        config
      )
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  deleteMedia: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/media/${id}`, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  }
};
