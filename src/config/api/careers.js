import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const careersConfig = {
  getCareers: async (selectedLang, entity_id) => {
    return await axios
      .get(
        `${API_URL}/${selectedLang}/entities/${entity_id}/available_positions`,
        {
          headers
        }
      )
      .then(response => {
        return {
          careers: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  },
  getCareerTips: async (selectedLang, entity_id) => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/hiring_tips`, {
        headers
      })
      .then(response => {
        console.log(response.data.processResult);
        return {
          tips: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
