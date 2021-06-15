import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const projectsConfig = {
  getProjects: async (selectedLang, entity_id) => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/projects`, {
        headers
      })
      .then(response => {
        return {
          projects: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
