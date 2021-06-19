import axios from "axios";

import { API_URL, API_URL2 } from "./config";
// let token = JSON.parse(localStorage.getItem("token"));

let headers = {
  "Access-Control-Allow-Origin": "*"
};

// let headerToken = {
//   "Access-Control-Allow-Origin": "*",
//   authorization: `Bearer ${token}`
// };

export const usersConfig = {
  singIn: async (username, password) => {
    return await axios
      .post(
        `${API_URL2}/users/login`,
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

    console.log(token, config);
    return await axios
      .get(`${API_URL2}/users`, config)
      .then(response => {
        console.log(response);
        return {
          users: response.data.processResult,
          status: response.status
        };
      })
      .catch(error => {
        console.log();
        return error;
      });
  }
};
