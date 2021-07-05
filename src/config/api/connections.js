import axios from "axios";

import { API_URL } from "./config";

export const connectionsConfig = {
  areasCourses: async (token, id_area, id_course) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/areas/${id_area}/courses/${id_course}`, "", config)
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
  },
  areasCoursesDelete: async (token, id_area, id_course) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/areas/${id_area}/courses/${id_course}`, config)
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
  },
  areasUnits: async (token, id_area, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/areas/${id_area}/units/${id_unit}`, "", config)
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
