import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    isLoading: false,
    properties: [],
    blogs: [],
    agents: [],
    contacts: [],
  },
  mutations,
  actions,
});

export default store;
