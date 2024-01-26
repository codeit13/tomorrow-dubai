import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    listings: [],
    properties: null,
    blogs: null,
    selectedBlog: null,
    searchableLocations: [],
  },
  mutations,
  actions,
});

export default store;
