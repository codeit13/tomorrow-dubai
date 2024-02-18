import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    isLoading: false,
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
