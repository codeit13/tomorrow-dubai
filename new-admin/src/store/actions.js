import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export const actions = {
  async fetchProperties({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      commit("SET_PROPERTIES", []);
      const { data } = await axios.get(`${BASE_URL}/property?status=APPROVED`);
      let properties = data ? data.property : [];

      commit("SET_PROPERTIES", properties);

      return properties;
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
      return [];
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
  async updateProperty({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, property } = payload;
      const { data } = await axios.put(`${BASE_URL}/property/${id}`, property);
      if (data.message) {
        commit("SET_TOASTER_MSG", { type: "success", message: data.message });
        dispatch("fetchProperties");
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async deleteProperty({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id } = payload;
      const { data } = await axios.delete(`${BASE_URL}/property/${id}`);
      dispatch("fetchProperties");
      if (data.message) {
        commit("SET_TOASTER_MSG", {
          type: "success",
          message: "Property deleted successfully!",
        });
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async updateBlog({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, blog } = payload;
      const { data } = await axios.put(`${BASE_URL}/blogs/${id}`, blog);
      if (data.message) {
        commit("SET_TOASTER_MSG", { type: "success", message: data.message });
        dispatch("fetchBlogs");
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async deleteBlog({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id } = payload;
      const { data } = await axios.delete(`${BASE_URL}/blog/${id}`);
      dispatch("fetchBlogs");
      if (data.message) {
        commit("SET_TOASTER_MSG", {
          type: "success",
          message: "Blog deleted successfully!",
        });
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async fetchAgents({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const { data } = await axios.get(`${BASE_URL}/agent`);
      const agents = data ? data.agents : [];
      commit("SET_AGENTS", agents);
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async fetchBlogs({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const { data } = await axios.get(`${BASE_URL}/blogs`);
      const blogs = data ? data.blogs : [];
      commit("SET_BLOGS", blogs);
      return;
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });

      return [];
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async post({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const { data } = await axios.post(`${BASE_URL}/postData`);
      return data;
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });

      return {};
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
};
