import axios from "axios";
import FormData from "form-data";

import { API_URL } from "./config";

export const adminNewsConfig = {
  getNews: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };
    return await axios
      .get(`${API_URL}/pt/news`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          news: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  editNews: async (
    token,
    id,
    // file,
    title_pt,
    title_eng,
    description_pt,
    description_eng,
    published_date,
    project_only
  ) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    // data.append("file", file);
    data.append("title_pt", title_pt);
    data.append("title_eng", title_eng);
    data.append("description_pt", description_pt);
    data.append("description_eng", description_eng);
    data.append("published_date", published_date);
    data.append("project_only", project_only);

    console.log(id, title_pt, title_eng, published_date, project_only);

    return await axios
      .put(`${API_URL}/pt/news/${id}`, data, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  editNewsImg: async (token, id, file) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("file", file);

    console.log(file);

    return await axios
      .patch(`${API_URL}/pt/news/${id}/picture`, data, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  addNews: async (
    token,
    file,
    title_pt,
    title_eng,
    description_pt,
    description_eng,
    published_date
    // project_only
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("file", file);
    data.append("title_pt", title_pt);
    data.append("title_eng", title_eng);
    data.append("description_pt", description_pt);
    data.append("description_eng", description_eng);
    data.append("published_date", published_date);
    // data.append("project_only", project_only);

    console.log(
      title_pt,
      title_eng,
      description_pt,
      description_eng,
      published_date
    );

    console.log(published_date);

    return await axios
      .post(`${API_URL}/pt/news`, data, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  deleteNews: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id);

    return await axios
      .delete(`${API_URL}/pt/news/${id}`, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  }
  // getAreasFocus: async token => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };
  //   return await axios
  //     .get(`${API_URL}/areas/focus`, config)
  //     .then(response => {
  //       console.log(response.data.processResult);
  //       return {
  //         focus: response.data.processResult,
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // },
  // addAreaFocus: async (token, file, description_pt, description_eng) => {
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   let data = new FormData();
  //   data.append("description_pt", description_pt);
  //   data.append("description_eng", description_eng);
  //   data.append("file", file);

  //   return await axios
  //     .post(`${API_URL}/areas/focus`, data, config)
  //     .then(response => {
  //       console.log(response.status);
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       return error;
  //     });
  // },
  // editAreaFocus: async (token, id, description_pt, description_eng) => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   return await axios
  //     .put(
  //       `${API_URL}/areas/focus/${id}`,
  //       {
  //         description_pt: description_pt,
  //         description_eng: description_eng
  //       },
  //       config
  //     )
  //     .then(response => {
  //       console.log(response.status);
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // },

  // deleteAreaFocus: async (token, id) => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   console.log(id);

  //   return await axios
  //     .delete(`${API_URL}/areas/focus/${id}`, config)
  //     .then(response => {
  //       console.log(response.status);
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       return error;
  //     });
  // }
};
