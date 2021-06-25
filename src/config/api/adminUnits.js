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

    console.log(file, designation, description_pt, description_eng);

    return await axios
      .post(`${API_URL}/units`, data, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  }
  // editArea: async (
  //   token,
  //   id,
  //   designation_pt,
  //   designation_eng,
  //   description_pt,
  //   description_eng
  // ) => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   return await axios
  //     .put(
  //       `${API_URL}/areas/${id}`,
  //       {
  //         designation_pt: designation_pt,
  //         designation_eng: designation_eng,
  //         description_pt: description_pt,
  //         description_eng: description_eng
  //       },
  //       config
  //     )
  //     .then(response => {
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // },
  // addArea: async (
  //   token,
  //   designation_pt,
  //   designation_eng,
  //   description_pt,
  //   description_eng
  // ) => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   return await axios
  //     .post(
  //       `${API_URL}/areas`,
  //       {
  //         designation_pt: designation_pt,
  //         designation_eng: designation_eng,
  //         description_pt: description_pt,
  //         description_eng: description_eng
  //       },
  //       config
  //     )
  //     .then(response => {
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // },
  // deleteArea: async (token, id) => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   console.log(id);

  //   return await axios
  //     .delete(`${API_URL}/areas/${id}`, config)
  //     .then(response => {
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // }
};
