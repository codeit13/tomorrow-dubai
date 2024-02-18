import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const store = createStore({
  state: {
    toasterData: null,
    isLoading: false,
    JWT_TOKEN: cookies.get("JWT-TOKEN") || null,
    checkLoginStatus: null,
    listings: [],
    properties: [],
    blogs: [],
    agents: [],
    contacts: [],
  },
  mutations,
  actions,
  getters: {
    getCheckLoginStatus(state) {
      return state.checkLoginStatus;
    },
  },
});

export default store;
