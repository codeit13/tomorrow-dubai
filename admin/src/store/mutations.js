export const mutations = {
  SET_TOASTER_MSG(state, payload) {
    state.toasterData = payload;
  },
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_CHECK_LOGIN_STATUS(state, payload) {
    state.checkLoginStatus = payload;
  },
  SET_PROPERTIES(state, payload) {
    state.properties = payload;
  },
  SET_LISTINGS(state, payload) {
    state.listings = payload;
  },
  SET_BLOGS(state, payload) {
    state.blogs = payload;
  },
  SET_AGENTS(state, payload) {
    state.agents = payload;
  },
  SET_CONTACTS(state, payload) {
    state.contacts = payload;
  },
  SET_SEARCHABLE_LOCATIONS(state, payload) {
    state.searchableLocations = payload;
  },
};
