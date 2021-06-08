import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const unitiesConfig = {
  getUnitiesPrincipals: async (selectedLang, entityId) => {
    console.log(selectedLang);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entityId}/principals`, {
        headers
      })
      .then(response => {
        console.log(response.data.processResult);
        return {
          principals: response.data.processResult,
          principalsStatus: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
