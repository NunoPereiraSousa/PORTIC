import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const newsConfig = {
  getNews: async (selectedLang, entity_id) => {
    console.log(selectedLang, entity_id);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/news`, {
        headers
      })
      .then(response => {
        return {
          news: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
