import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export const actions = {
  async get() {
    try {
      const { data } = await axios.get(`${BASE_URL}/getData`);
      return data;
    } catch (e) {
      console.log(e);
      return {};
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
