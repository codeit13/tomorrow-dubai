export const mutations = {
  SET_TOASTER_MSG(state, payload) {
    state.toasterData = payload;
  },
  SET_PROPERTIES(state, payload) {
    state.properties = payload;
  },
  SET_BLOGS(state, payload) {
    state.blogs = payload;
  },
};
