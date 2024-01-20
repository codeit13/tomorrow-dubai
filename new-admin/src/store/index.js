import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    properties: null,
    blogs: null,
  },
  mutations,
  actions,
});

export default store;
