import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export const actions = {
  async checkLogin({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const { data } = await axios.get(`${BASE_URL}/checkLogin`);
      console.log("setting check login status data", data);
      commit("SET_CHECK_LOGIN_STATUS", data);
      return data;
    } catch (e) {
      console.log(e);
      return { status: false };
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
  async login({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, payload);

      if (data.user) {
        commit("SET_TOASTER_MSG", {
          type: "success",
          message: "Login successful",
        });
      }
      return data;
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
  async fetchProperties({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      commit("SET_PROPERTIES", []);
      const { data } = await axios.get(
        `${BASE_URL}/property?status=APPROVED&size=30`
      );
      console.log(data.property);
      let properties = data ? data.property : [];

      commit("SET_PROPERTIES", properties || []);

      return properties;
    } catch (e) {
      console.log(e);
      commit("SET_PROPERTIES", []);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
      return [];
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
  async fetchListings({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      commit("SET_LISTINGS", []);
      const { data } = await axios.get(
        `${BASE_URL}/listing?status=APPROVED&size=30`
      );
      let listings = data ? data.listing : [];

      commit("SET_LISTINGS", listings || []);

      return listings;
    } catch (e) {
      console.log(e);
      commit("SET_LISTINGS", []);

      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
      return [];
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
  async createListing({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { listing } = payload;
      const { data } = await axios.post(`${BASE_URL}/listing/`, {
        status: "APPROVED",
        ...listing,
      });
      if (data.message) {
        commit("SET_TOASTER_MSG", { type: "success", message: data.message });
        dispatch("fetchListings");
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },
  async updateListing({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, listing } = payload;
      const { data } = await axios.put(`${BASE_URL}/listing/${id}`, {
        status: "APPROVED",
        ...listing,
      });
      if (data.message) {
        commit("SET_TOASTER_MSG", { type: "success", message: data.message });
        dispatch("fetchListings");
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async deleteListing({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id } = payload;
      const { data } = await axios.delete(`${BASE_URL}/listing/${id}`);
      dispatch("fetchListings");
      if (data.message) {
        commit("SET_TOASTER_MSG", {
          type: "success",
          message: "Listing deleted successfully!",
        });
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async createProperty({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { property } = payload;
      const { data } = await axios.post(`${BASE_URL}/property/`, {
        ...property,
      });
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
  async updateProperty({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, property } = payload;
      const { data } = await axios.put(`${BASE_URL}/property/${id}`, {
        status: "APPROVED",
        ...property,
      });
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

  async createBlog({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { blog } = payload;
      const { data } = await axios.post(`${BASE_URL}/blogs/`, blog);
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
      const { data } = await axios.delete(`${BASE_URL}/blogs/${id}`);
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

  async createAgent({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { agent } = payload;
      const { data } = await axios.post(`${BASE_URL}/agent/`, agent);
      if (data.message) {
        commit("SET_TOASTER_MSG", { type: "success", message: data.message });
        dispatch("fetchAgents");
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async updateAgent({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, agent } = payload;
      const { data } = await axios.put(`${BASE_URL}/agent/${id}`, agent);
      if (data.message) {
        commit("SET_TOASTER_MSG", { type: "success", message: data.message });
        dispatch("fetchAgents");
      }
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
    } finally {
      commit("SET_IS_LOADING", false);
    }
  },

  async deleteAgent({ commit, dispatch }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id } = payload;
      const { data } = await axios.delete(`${BASE_URL}/agent/${id}`);
      dispatch("fetchAgents");
      if (data.message) {
        commit("SET_TOASTER_MSG", {
          type: "success",
          message: "Agent deleted successfully!",
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

  async fetchContacts({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const { data } = await axios.get(`${BASE_URL}/contact`);
      const contacts = data ? data.contacts.reverse() : [];
      commit("SET_CONTACTS", contacts);
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
