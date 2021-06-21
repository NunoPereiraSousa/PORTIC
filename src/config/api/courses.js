import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const coursesConfig = {
  getCourses: async (selectedLang, entity_id) => {
    console.log(`${API_URL}/${selectedLang}/entities/${entity_id}/courses`);
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/courses`, {
        headers
      })
      .then(response => {
        return {
          courses: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
