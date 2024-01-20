import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export const actions = {
  async fetchProperties({ commit }) {
    try {
      const { data } = await axios.get(`${BASE_URL}/property?status=APPROVED`);
      let properties = data ? data.property : [];

      // await Promise.all(
      //   properties.map(async (property) => {
      //     try {
      //       const coordinates = property.location.coordinates;
      //       const { data } = await axios.get(
      //         `https://nominatim.openstreetmap.org/reverse?lat=${coordinates[1]}&lon=${coordinates[0]}&format=json`
      //       );
      //       property.pinLocation = data.address;
      //     } catch (e) {
      //       console.log(e);
      //       property.pinLocation = null;
      //     }
      //   })
      // );

      commit("SET_PROPERTIES", properties);

      return properties;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  async post() {
    try {
      const { data } = await axios.post(`${BASE_URL}/postData`);
      return data;
    } catch (e) {
      console.log(e);
      return {};
    }
  },
};
