import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const entityConfig = {
  getEntityData: async selectedLang => {
    console.log(`LANG ARGUMENT RECEIVED: ${selectedLang}`);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/4cw0jfzg2okpe61lgd_Entity`, {
        headers
      })
      .then(response => {
        return {
          data: response.data.processResult[0],
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
