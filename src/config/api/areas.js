import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const areasConfig = {
  getAreas: async (selectedLang, entity_id) => {
    console.log(`${API_URL}/${selectedLang}/entities/${entity_id}/areas`);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/areas`, {
        headers
      })
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
  getAreasGroups: async (selectedLang, entity_id) => {
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
