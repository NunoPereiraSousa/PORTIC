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

    console.log(id_area, id_unit);

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
  },
  areasUnitsDelete: async (token, id_area, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/areas/${id_area}/units/${id_unit}`, config)
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
  areasProjects: async (token, id_area, id_project) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/projects/${id_project}/areas/${id_area}`, "", config)
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
  areasProjectsDelete: async (token, id_area, id_project) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/projects/${id_project}/areas/${id_area}`, config)
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
  areasCareers: async (token, id_area, id_career) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/areas/${id_area}/positions/${id_career}`, "", config)
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
  areasCareersDelete: async (token, id_area, id_career) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/areas/${id_area}/positions/${id_career}`, config)
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

  // UNIT COURSE
  unitsCourses: async (token, id_course, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/courses/${id_course}/units/${id_unit}`, "", config)
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
  unitsCoursesDelete: async (token, id_course, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/courses/${id_course}/units/${id_unit}`, config)
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

  // PROJECTS UNITS
  projectsUnits: async (token, id_project, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/projects/${id_project}/units/${id_unit}`, "", config)
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
  projectsUnitsDelete: async (token, id_project, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/projects/${id_project}/units/${id_unit}`, config)
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
  careersUnits: async (token, id_career, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(`${API_URL}/positions/${id_career}/units/${id_unit}`, "", config)
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
  careersUnitsDelete: async (token, id_career, id_unit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/positions/${id_career}/units/${id_unit}`, config)
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
