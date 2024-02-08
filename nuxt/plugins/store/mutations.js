export const mutations = {
  SET_TOASTER_MSG(state, payload) {
    state.toasterData = payload;
  },
  SET_LISTINGS(state, payload) {
    state.listings = payload;
  },
  SET_PROPERTIES(state, payload) {
    state.properties = payload;
  },
  SET_BLOGS(state, payload) {
    state.blogs = payload;
  },
  SET_AGENTS(state, payload) {
    state.agents = payload;
  },
  SET_SELECTED_BLOG(state, payload) {
    state.selectedBlog = payload;
  },
  SET_SEARCHABLE_LOCATIONS(state, payload) {
    state.searchableLocations = payload;
  },
  SET_SEARCH_PRIORITY(state, payload) {
    state.searchPriority = payload;
  },
};
