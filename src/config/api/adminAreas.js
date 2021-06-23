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
  },
  addArea: async (
    token,
    designation_pt,
    designation_eng,
    description_pt,
    description_eng
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(
      `${designation_pt} - ${description_pt}
      ${designation_eng} - ${description_eng}`
    );

    return await axios
      .post(
        `${API_URL}/areas`,
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
  },
  deleteArea: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id);

    return await axios
      .delete(`${API_URL}/areas/${id}`, config)
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
