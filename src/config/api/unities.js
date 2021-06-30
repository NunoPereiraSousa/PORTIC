import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const unitiesConfig = {
  getUnitiesPrincipals: async (selectedLang, entityId) => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entityId}/principals`, {
        headers
      })
      .then(response => {
        return {
          principals: response.data.processResult,
          principalsStatus: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  },
  getUnities: async (selectedLang, entityId) => {
    console.log(
      selectedLang,
      `${API_URL}/${selectedLang}/entities/${entityId}/unities`
    );
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entityId}/unities`, {
        headers
      })
      .then(response => {
        return {
          unities: response.data.processResult,
          unitiesStatus: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
