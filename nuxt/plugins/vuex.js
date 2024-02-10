import { createStore } from "vuex";
import { actions } from "./store/actions";
import { mutations } from "./store/mutations";
import { neighbourhoodProperties } from "./store/neighbourhood";

const store = createStore({
  state() {
    return {
      toasterData: null,
      listings: [],
      properties: null,
      blogs: null,
      agents: [],
      selectedBlog: null,
      searchableLocations: [],
      searchPriority: null,
      neighbourhoodProperties: neighbourhoodProperties,
    };
  },
  mutations,
  actions,
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
