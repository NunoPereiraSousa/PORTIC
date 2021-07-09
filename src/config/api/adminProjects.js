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
        return {
          projects: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
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
    summary_eng,
    summary_pt,
    project_contact,
    project_email,
    start_date,
    end_date,
    pdf_path,
    coordinator
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
    data.append("summary_eng", summary_eng);
    data.append("summary_pt", summary_pt);
    data.append("project_contact", project_contact);
    data.append("project_email", project_email);
    data.append("start_date", start_date);
    data.append("end_date", end_date);
    data.append("pdf_path", pdf_path);
    data.append("coordinator", coordinator);

    console.log(coordinator);

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
    summary_eng,
    summary_pt,
    project_contact,
    project_email,
    start_date,
    end_date,
    coordinator
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
    data.append("summary_eng", summary_eng);
    data.append("summary_pt", summary_pt);
    data.append("project_contact", project_contact);
    data.append("project_email", project_email);
    data.append("start_date", start_date);
    data.append("end_date", end_date);
    data.append("coordinator", coordinator);

    return await axios
      .put(`${API_URL}/projects/${id}`, data, config)
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
  deleteProject: async (token, id) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id);

    return await axios
      .delete(`${API_URL}/projects/${id}`, config)
      .then(response => {
        console.log(response.status);
        return {
          status: response.status
        };
      })
      .catch(error => {
        console.error(error);
        return error;
      });
  },
  editProjectPdf: async (token, id, file) => {
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
      .patch(`${API_URL}/projects/${id}/file`, data, config)
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
  addProjectImg: async (token, id, file) => {
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
      .post(`${API_URL}/projects/${id}/pictures`, data, config)
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
  deleteProjectImg: async (token, id, id_picture) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/projects/${id}/pictures/${id_picture}`, config)
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
  addPartner: async (token, id, investor_name, file) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("investor_name", investor_name);
    data.append("file", file);

    console.log(id, investor_name, file);

    return await axios
      .post(`${API_URL}/projects/${id}/investors`, data, config)
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
  deletePartner: async (token, id, id_investor) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id, id_investor);

    return await axios
      .delete(`${API_URL}/projects/${id}/investors/${id_investor}`, config)
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
  addProjectNews: async (
    token,
    id,
    title_pt,
    title_eng,
    description_pt,
    description_eng,
    published_date,
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
    data.append("title_pt", title_pt);
    data.append("title_eng", title_eng);
    data.append("description_pt", description_pt);
    data.append("description_eng", description_eng);
    data.append("published_date", published_date);
    data.append("file", file);

    return await axios
      .post(`${API_URL}/projects/${id}/news`, data, config)
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
  addProjectTeam: async (token, id, id_team_member, can_edit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .post(
        `${API_URL}/projects/${id}/members`,
        {
          id_team_member: id_team_member,
          can_edit: can_edit
        },
        config
      )
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
  editProjectTeamMember: async (token, id, id_team_member, can_edit) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id, id_team_member, can_edit);

    return await axios
      .patch(
        `${API_URL}/projects/${id}/members/${id_team_member}`,
        {
          can_edit: can_edit
        },
        config
      )
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
  deleteProjectTeamMember: async (token, id, id_team_member) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .delete(`${API_URL}/projects/${id}/members/${id_team_member}`, config)
      .then(response => {
        return {
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  addProjectInvestor: async (token, id, file) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("file", file);

    return await axios
      .post(`${API_URL}/projects/${id}/gov/investors`, data, config)
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
