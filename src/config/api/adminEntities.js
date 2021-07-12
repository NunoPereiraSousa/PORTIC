import axios from "axios";
import FormData from "form-data";

import { API_URL } from "./config";

export const adminEntitiesConfig = {
  getEntities: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/entities`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          entities: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  getEntitiesInitials: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/entities/initials`, config)
      .then(response => {
        console.log(response.data.processResult);
        return {
          initials: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  addEntity: async (
    token,
    designation,
    initials,
    desc_html_pt,
    desc_html_eng,
    slogan_eng,
    slogan_pt,
    colors,
    main_email,
    secondary_email,
    main_contact,
    linkedIn,
    facebook,
    instagram,
    youtube,
    twitter,
    optional_course_menu,
    optional_project_menu,
    optional_recruitment_menu,
    optional_media_menu,
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
    data.append("designation", designation);
    data.append("initials", initials);
    data.append("desc_html_pt", desc_html_pt);
    data.append("desc_html_eng", desc_html_eng);
    data.append("slogan_eng", slogan_eng);
    data.append("slogan_pt", slogan_pt);
    data.append("colors", colors);
    data.append("main_email", main_email);
    data.append("secondary_email", secondary_email);
    data.append("main_contact", main_contact);
    data.append("linkedIn", linkedIn);
    data.append("facebook", facebook);
    data.append("instagram", instagram);
    data.append("youtube", youtube);
    data.append("twitter", twitter);
    data.append("optional_course_menu", optional_course_menu);
    data.append("optional_project_menu", optional_project_menu);
    data.append("optional_recruitment_menu", optional_recruitment_menu);
    data.append("optional_media_menu", optional_media_menu);
    data.append("file", file);

    console.log(
      designation,
      initials,
      desc_html_pt,
      desc_html_eng,
      slogan_eng,
      slogan_pt,
      colors,
      main_email,
      secondary_email,
      main_contact,
      linkedIn,
      facebook,
      instagram,
      youtube,
      twitter,
      optional_course_menu,
      optional_project_menu,
      optional_recruitment_menu,
      optional_media_menu,
      file
    );

    return await axios
      .post(`${API_URL}/entities`, data, config)
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
  editEntity: async (
    token,
    id,
    designation,
    initials,
    desc_html_pt,
    desc_html_eng,
    slogan_eng,
    slogan_pt,
    colors,
    main_email,
    secondary_email,
    main_contact,
    linkedIn,
    facebook,
    instagram,
    youtube,
    twitter,
    optional_course_menu,
    optional_project_menu,
    optional_recruitment_menu,
    optional_media_menu
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    };

    console.log(
      id,
      designation,
      initials,
      desc_html_pt,
      desc_html_eng,
      slogan_eng,
      slogan_pt,
      colors,
      main_email,
      secondary_email,
      main_contact,
      linkedIn,
      facebook,
      instagram,
      youtube,
      twitter,
      optional_course_menu,
      optional_project_menu,
      optional_recruitment_menu,
      optional_media_menu
    );

    return await axios
      .put(
        `${API_URL}/entities/${id}`,
        {
          designation: designation,
          initials: initials,
          desc_html_pt: desc_html_pt,
          desc_html_eng: desc_html_eng,
          slogan_eng: slogan_eng,
          slogan_pt: slogan_pt,
          colors: colors,
          main_email: main_email,
          secondary_email: secondary_email,
          main_contact: main_contact,
          linkedIn: linkedIn,
          facebook: facebook,
          instagram: instagram,
          youtube: youtube,
          twitter: twitter,
          optional_course_menu: optional_course_menu,
          optional_project_menu: optional_project_menu,
          optional_recruitment_menu: optional_recruitment_menu,
          optional_media_menu: optional_media_menu
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
  editEntityImg: async (token, id, file) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    let data = new FormData();
    data.append("file", file);

    console.log(id, file);

    return await axios
      .patch(`${API_URL}/entities/${id}/logo`, data, config)
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
  editEntityMenu: async (
    token,
    id,
    id_menu,
    designation_pt,
    designation_eng,
    page_description_eng,
    page_description_pt
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(
      id,
      id_menu,
      designation_pt,
      designation_eng,
      page_description_eng,
      page_description_pt
    );

    return await axios
      .put(
        `${API_URL}/entities/${id}/menus/${id_menu}`,
        {
          designation_pt: designation_pt,
          designation_eng: designation_eng,
          page_description_eng: page_description_eng,
          page_description_pt: page_description_pt
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
  editEntityStatus: async (token, id, new_status) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(id, new_status);

    return await axios
      .patch(
        `${API_URL}/entities/${id}/status`,
        {
          new_status: new_status
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
  }
};
