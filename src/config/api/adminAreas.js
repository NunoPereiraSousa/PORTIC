import axios from "axios";

import { API_URL } from "./config";

export const adminAreasConfig = {
  getAreas: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };
    return await axios
      .get(`${API_URL}/areas`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          areas: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  },
  editArea: async (
    token,
    id,
    designation_pt,
    designation_eng,
    description_pt,
    description_eng
  ) => {
    console.log(designation_pt);

    console.log(designation_eng);

    console.log(description_pt);

    console.log(description_eng);

    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .put(
        `${API_URL}/areas/${id}`,
        {
          designation_pt: designation_pt,
          designation_eng: designation_eng,
          description_pt: description_pt,
          description_eng: description_eng
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
  }
};
