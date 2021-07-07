import axios from "axios";

import { API_URL } from "./config";

export const adminCoursesConfig = {
  getCourses: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };
    return await axios
      .get(`${API_URL}/courses`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          courses: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  editCourse: async (
    token,
    id,
    designation,
    html_structure_eng,
    html_structure_pt,
    coordinator
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .put(
        `${API_URL}/courses/${id}`,
        {
          designation: designation,
          html_structure_eng: html_structure_eng,
          html_structure_pt: html_structure_pt,
          coordinator: coordinator
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
  addCourse: async (
    token,
    designation,
    html_structure_eng,
    html_structure_pt,
    coordinator
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(
        `${API_URL}/courses`,
        {
          designation: designation,
          html_structure_eng: html_structure_eng,
          html_structure_pt: html_structure_pt,
          coordinator: coordinator
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
  deleteCourse: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/courses/${id}`, config)
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
