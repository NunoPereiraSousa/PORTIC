import axios from "axios";

import { API_URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const entityConfig = {
  getEntityId: async () => {
    return await axios
      .get(`${API_URL}/entities/main`, {
        headers
      })
      .then(response => {
        return {
          entity_id: response.data.processResult.id_entity,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  },
  getEntityData: async (selectedLang, entityId) => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entityId}`, {
        headers
      })
      .then(response => {
        return {
          data: response.data.processResult[0],
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  },
  getEntitiesMenus: async (selectedLang, entityId) => {
    return await axios
      .get(`${API_URL}/${selectedLang}/entities/${entityId}`, {
        headers
      })
      .then(response => {
        return {
          menus: response.data.processResult[0].menus,
          status: response.status
        };
      })
      .catch(error => {
        console.log(error);

        return error;
      });
  }
};
