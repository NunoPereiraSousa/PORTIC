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
        console.log(response.data.processResult);
        return {
          medias: response.data.processResult[0],
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

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

    console.log(config);

    console.log(
      title_eng,
      title_pt,
      description_pt,
      description_eng,
      appearance_case,
      youtube_path
    );

    return await axios
      .put(
        `${API_URL}/medias/${id}`,
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
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

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

    console.log(
      title_eng,
      title_pt,
      description_pt,
      description_eng,
      appearance_case,
      youtube_path
    );

    return await axios
      .post(
        `${API_URL}/medias`,
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
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

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
      .delete(`${API_URL}/medias/${id}`, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
