import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    isLoading: false,
    listings: [],
    properties: [],
    blogs: [],
    agents: [],
    contacts: [],
  },
  mutations,
  actions,
});

export default store;
