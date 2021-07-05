import axios from "axios";
import FormData from "form-data";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const usersConfig = {
  singIn: async (username, password) => {
    return await axios
      .post(
        `${API_URL}/users/login`,
        {
          username: username,
          password: password
        },
        {
          headers
        }
      )
      .then(response => {
        return {
          user: response.data.processResult,
          token: response.data.processResult.token,
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  singUp: async (
    username,
    firstName,
    password,
    lastName,
    email,
    phoneNumber
  ) => {
    return await axios
      .post(
        `${API_URL}/users/register`,
        {
          username: username,
          first_name: firstName,
          password: password,
          last_name: lastName,
          email: email,
          phone_numb: phoneNumber
        },
        {
          headers
        }
      )
      .then(response => {
        return {
          user: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        return error;
      });
  },
  getUsers: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/users`, config)
      .then(response => {
        return {
          users: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  getProfileData: async token => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    return await axios
      .get(`${API_URL}/users/profile`, config)
      .then(response => {
        console.log(response.data.processResult[0]);
        return {
          user: response.data.processResult[0],
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  editProfile: async (
    token,
    username,
    description_pt,
    description_eng,
    email,
    phone_numb,
    linkedIn_url,
    fullname,
    post
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(
      username,
      description_pt,
      description_eng,
      email,
      phone_numb,
      linkedIn_url,
      fullname,
      post
    );

    return await axios
      .put(
        `${API_URL}/users/profile`,
        {
          username: username,
          description_pt: description_pt,
          description_eng: description_eng,
          email: email,
          phone_numb: phone_numb,
          linkedIn_url: linkedIn_url,
          full_name: fullname,
          post: post
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
  editProfileImg: async (token, file) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(file);

    let data = new FormData();
    data.append("file", file);

    return await axios
      .patch(`${API_URL}/users/profile/picture`, data, config)
      .then(response => {
        console.log(response.status);
        return {
          image: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  editAdminProfile: async (
    token,
    id_user,
    username,
    description_pt,
    description_eng,
    email,
    phone_numb,
    linkedIn_url,
    fullname,
    post
  ) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`
      }
    };

    console.log(
      username,
      description_pt,
      description_eng,
      email,
      phone_numb,
      linkedIn_url,
      fullname,
      post
    );

    return await axios
      .put(
        `${API_URL}/users/${id_user}/profile`,
        {
          username: username,
          description_pt: description_pt,
          description_eng: description_eng,
          email: email,
          phone_numb: phone_numb,
          linkedIn_url: linkedIn_url,
          full_name: fullname,
          post: post
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
  }
};
