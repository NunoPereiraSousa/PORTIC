import axios from "axios";
// import FormData from "form-data";

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
    optional_media_menu
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    };

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
      optional_media_menu
    );

    return await axios
      .post(
        `${API_URL}/entities`,
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
  }
};
