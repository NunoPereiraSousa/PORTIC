import axios from "axios";
import FormData from "form-data";

import { API_URL } from "./config";

export const adminProjectsConfig = {
  getProjects: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/projects`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          projects: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  addProject: async (
    token,
    title,
    initials,
    reference,
    desc_html_structure_eng,
    desc_html_structure_pt,
    project_contact,
    project_email,
    start_date,
    end_date,
    pdf_path
  ) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("title", title);
    data.append("initials", initials);
    data.append("reference", reference);
    data.append("desc_html_structure_eng", desc_html_structure_eng);
    data.append("desc_html_structure_pt", desc_html_structure_pt);
    data.append("project_contact", project_contact);
    data.append("project_email", project_email);
    data.append("start_date", start_date);
    data.append("end_date", end_date);
    data.append("pdf_path", pdf_path);

    return await axios
      .post(`${API_URL}/projects`, data, config)
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
  editProject: async (
    token,
    id,
    title,
    initials,
    reference,
    desc_html_structure_eng,
    desc_html_structure_pt,
    start_date,
    end_date,
    project_contact,
    project_email
  ) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("title", title);
    data.append("initials", initials);
    data.append("reference", reference);
    data.append("desc_html_structure_eng", desc_html_structure_eng);
    data.append("desc_html_structure_pt", desc_html_structure_pt);
    data.append("start_date", start_date);
    data.append("end_date", end_date);
    data.append("project_contact", project_contact);
    data.append("project_email", project_email);

    console.log(
      title,
      initials,
      reference,
      desc_html_structure_eng,
      desc_html_structure_pt,
      start_date,
      end_date,
      project_contact,
      project_email
    );

    return await axios
      .put(`${API_URL}/projects/${id}`, data, config)
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

  // deleteArea: async (token, id) => {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   console.log(id);

  //   return await axios
  //     .delete(`${API_URL}/areas/${id}`, config)
  //     .then(response => {
  //       return {
  //         status: response.status
  //       };
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // },
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
  // editAreaFocusImg: async (token, id, file) => {
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       "Access-Control-Allow-Origin": "*",
  //       authorization: `Bearer ${token}`
  //     }
  //   };

  //   let data = new FormData();
  //   data.append("file", file);

  //   return await axios
  //     .patch(`${API_URL}/areas/focus/${id}/icon`, data, config)
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
