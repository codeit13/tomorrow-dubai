import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    properties: null,
  },
  mutations,
  actions,
});

export default store;
