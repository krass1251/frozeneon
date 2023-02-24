import { createStore } from 'vuex';

export default createStore({
  state: {
    packageResults: [],
    apiUrl: 'https://registry.npmjs.org/-/v1/search',
    resultsOnPage: 10,
  },
  getters: {
  },
  mutations: {
    setPackageResults: (state, results) => {
      state.packageResults = results;
    },
  },
  actions: {
  },
});
