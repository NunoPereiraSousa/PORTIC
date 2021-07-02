import axios from "axios";
// import FormData from "form-data";

import { API_URL } from "./config";

export const adminCareersConfig = {
  getCareers: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/positions`, config)
      .then(response => {
        console.log(response.data.processResult);
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
  editCareer: async (
    token,
    id,
    designation_pt,
    designation_eng,
    category_1,
    category_2,
    category_3,
    desc_html_structure_pt,
    desc_html_structure_eng,
    pdf_path,
    candidacy_link
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(
      `${category_1} - ${category_1} - ${category_2} - ${category_3} - ${pdf_path} - ${candidacy_link}`
    );

    return await axios
      .put(
        `${API_URL}/positions/${id}`,
        {
          designation_pt: designation_pt,
          designation_eng: designation_eng,
          category_1: category_1,
          category_2: category_2,
          category_3: category_3,
          desc_html_structure_pt: desc_html_structure_pt,
          desc_html_structure_eng: desc_html_structure_eng,
          pdf_path: pdf_path,
          candidacy_link: candidacy_link
        },
        config
      )
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  addCareer: async (
    token,
    designation_pt,
    designation_eng,
    category_1,
    category_2,
    category_3,
    desc_html_structure_pt,
    desc_html_structure_eng,
    pdf_path,
    candidacy_link
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(
        `${API_URL}/positions`,
        {
          designation_pt: designation_pt,
          designation_eng: designation_eng,
          category_1: category_1,
          category_2: category_2,
          category_3: category_3,
          desc_html_structure_pt: desc_html_structure_pt,
          desc_html_structure_eng: desc_html_structure_eng,
          pdf_path: pdf_path,
          candidacy_link: candidacy_link
        },
        config
      )
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  deleteCareer: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/positions/${id}`, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
};
