import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const areasConfig = {
  getAreas: async (selectedLang, entity_id) => {
    console.log(`LANG ARGUMENT RECEIVED: ${selectedLang}`);
    console.log(`ID ARGUMENT RECEIVED: ${entity_id}`);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/areas`, {
        headers
      })
      .then(response => {
        return {
          areas: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};