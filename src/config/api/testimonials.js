import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const testimonialsConfig = {
  getTestimonials: async (selectedLang, entity_id) => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entity_id}/testimonials`, {
        headers
      })
      .then(response => {
        console.log(response.data.processResult, response.status);
        return {
          testimonials: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
