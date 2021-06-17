import axios from "axios";

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
  }
};
