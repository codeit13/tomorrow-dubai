import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export const actions = {
  async fetchListings({ commit }) {
    try {
      commit("SET_LISTINGS", []);

      const { data } = await axios.get(
        `${BASE_URL}/listing?status=APPROVED&size=30`
      );
      let listings = data ? data.listing : [];

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

      const searchableLocations = listings
        ? listings.map((p) => {
            return {
              address: p.address,
              title: p.title,
              name: p.propertyName,
            };
          })
        : [];

      commit("SET_SEARCHABLE_LOCATIONS", searchableLocations);

      commit("SET_LISTINGS", listings || []);

      return listings;
    } catch (e) {
      console.log(e);
      commit("SET_LISTINGS", []);
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
      data.message = "We will contact you shortly";
      return data;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  },

  async fetchBlogs({ commit }) {
    try {
      const { data } = await axios.get(`${BASE_URL}/blogs`);
      const blogs = data ? data.blogs : [];
      commit("SET_BLOGS", blogs);
      return;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  async fetchCordinatesFromAddress(store, payload) {
    try {
      const { address } = payload;
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json`
      );
      if (data.length == 0) {
        try {
          let { address } = payload;
          address = address.split(",")[0];
          const { data } = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
              address
            )}&format=json`
          );
          return data;
        } catch (e) {
          console.log(e);
          return [];
        }
      } else {
        return data;
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  async fetchAddressFromCordinates(store, payload) {
    try {
      const coordinates = payload.coordinates;
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${coordinates[0]}&lon=${coordinates[1]}&format=json`
      );
      return data;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  async submitSellForm(store, payload) {
    try {
      const { data } = await axios.post(`${BASE_URL}/listing/`, payload);
      return data;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  },
};
