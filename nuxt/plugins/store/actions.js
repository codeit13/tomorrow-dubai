import axios from "axios";

// const BASE_URL = "https://tomorrowluxuryproperty.com/api";
const BASE_URL = "http://localhost:5000/api";

export const actions = {
  async fetchListings({ state, commit }) {
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
            p.price = parseInt(p.price);
            return {
              location: p.address,
              name: p.propertyName,
              propertyName: p.propertyName,
              title: p.title,
              address: p.address,
              type: "LISTING",
            };
          })
        : [];

      commit("SET_SEARCHABLE_LOCATIONS", [
        ...JSON.parse(JSON.stringify(state.searchableLocations)),
        ...searchableLocations,
      ]);

      commit("SET_LISTINGS", listings || []);

      return listings;
    } catch (e) {
      console.log(e);
      commit("SET_LISTINGS", []);
      return [];
    }
  },
  async fetchProperties({ state, commit }) {
    try {
      commit("SET_PROPERTIES", []);

      const { data } = await axios.get(`${BASE_URL}/property`);
      let properties = data ? data.property : [];

      commit("SET_PROPERTIES", properties || []);

      const searchableLocations = properties
        ? properties.map((l) => {
            return {
              address: l.location,
              location: l.location,
              name: l.name,
              type: "PROPERTY",
            };
          })
        : [];

      commit("SET_SEARCHABLE_LOCATIONS", [
        ...JSON.parse(JSON.stringify(state.searchableLocations)),
        ...searchableLocations,
      ]);

      return properties;
    } catch (e) {
      console.log(e);
      commit("SET_PROPERTIES", []);
      return [];
    }
  },
  async fetchAgents({ commit }) {
    try {
      const { data } = await axios.get(`${BASE_URL}/agent`);
      const agents = data ? data.agents : [];
      commit("SET_AGENTS", agents);
    } catch (e) {
      console.log(e);
      commit("SET_TOASTER_MSG", { type: "error", message: e.message });
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

  async submitContactForm({ commit }, payload) {
    try {
      const { data } = await axios.post(`${BASE_URL}/contact/`, payload);
      data.message =
        "Congrats, We will send you updates directly to your email.";

      return data;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  },
  async subscribeNewsLetter(store, payload) {
    try {
      const { data } = await axios.post(`${BASE_URL}/newsletter/`, payload);
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
          address = address.split(",");

          address.splice(0, 1);

          address = address.join(",");
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
