import axios from "axios";
import { API_KEY } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const weatherConfig = {
  getCurrentWeather: async () => {
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=41.1496&lon=-8.611&appid=${API_KEY}&units=metric`,
        headers
      )
      .then(response => {
        return {
          weather: response.data,
          status: response.status
        };
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
};
