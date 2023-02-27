function state() {
  return {
    packageResults: [],
    packageResultsTotal: [],
    apiUrl: 'https://registry.npmjs.org/-/v1/search',
    resultsOnPage: 10,
  };
}

export default state;
