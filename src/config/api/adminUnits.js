import axios from "axios";
import FormData from "form-data";

import { API_URL } from "./config";

export const adminUnitsConfig = {
  getUnits: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };
    return await axios
      .get(`${API_URL}/units`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          units: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  addUnit: async (
    token,
    file,
    designation,
    description_pt,
    description_eng
  ) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("designation", designation);
    data.append("description_pt", description_pt);
    data.append("description_eng", description_eng);
    data.append("file", file);

    return await axios
      .post(`${API_URL}/units`, data, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  editUnit: async (token, id, designation, description_pt, description_eng) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .put(
        `${API_URL}/units/${id}`,
        {
          designation: designation,
          description_pt: description_pt,
          description_eng: description_eng
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
  editUnitImg: async (token, id, file) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("file", file);

    return await axios
      .patch(`${API_URL}/units/${id}/picture`, data, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  deleteUnit: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id);

    return await axios
      .delete(`${API_URL}/units/${id}`, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        console.error(error);
        return error;
      });
  }
};
