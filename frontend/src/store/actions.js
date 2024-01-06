import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export const actions = {
  async fetchProperties() {
    try {
      const { data } = await axios.get(`${BASE_URL}/property?status=APPROVED`);
      return data ? data.property : [];
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

  async joinAsAgent(store, payload) {
    try {
      const { data } = await axios.post(`${BASE_URL}/agent/`, payload);
      return data;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  },

  async submitContactForm(store, payload) {
    try {
      const { data } = await axios.post(`${BASE_URL}/contact/`, payload);
      return data;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  },
};
