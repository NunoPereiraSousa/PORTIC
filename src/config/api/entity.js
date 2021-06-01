import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const entityConfig = {
  getEntityData: async selectedLang => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/4cw0jfzg2okpe61lgd_Entity`, {
        headers
      })
      .then(response => {
        console.log(response);

        return {
          data: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
