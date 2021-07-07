import axios from "axios";
// import FormData from "form-data";

import { API_URL } from "./config";

export const adminEntitiesConfig = {
  getEntitiesInitials: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/entities/initials`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          initials: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
};
