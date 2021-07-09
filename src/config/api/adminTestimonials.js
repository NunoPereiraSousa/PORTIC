import axios from "axios";
import FormData from "form-data";

import { API_URL } from "./config";

export const adminReviewsConfig = {
  getTestimonials: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };
    return await axios
      .get(`${API_URL}/testimonials`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          testimonials: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  addTestimonials: async (
    token,
    person_name,
    institution_name,
    testimonial_text_pt,
    testimonial_text_eng,
    file
  ) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("person_name", person_name);
    data.append("institution_name", institution_name);
    data.append("testimonial_text_pt", testimonial_text_pt);
    data.append("testimonial_text_eng", testimonial_text_eng);
    data.append("file", file);

    console.log(
      person_name,
      institution_name,
      testimonial_text_pt,
      testimonial_text_eng,
      file
    );

    return await axios
      .post(`${API_URL}/testimonials`, data, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  deleteTestimonial: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/testimonials/${id}`, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  }
};
