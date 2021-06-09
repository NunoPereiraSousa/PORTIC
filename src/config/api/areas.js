import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const areasConfig = {
  getAreas: async (selectedLang, entity_id) => {
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
  },
  getAreasGroups: async (selectedLang, entity_id) => {
    console.log(`LANG ARGUMENT RECEIVED: ${selectedLang}`);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/area_focus`, {
        headers
      })
      .then(response => {
        return {
          groups: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
