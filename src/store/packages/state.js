function state() {
  return {
    packagesResults: [],
    packageResult: {},
    packagesResultsTotal: 0,
    searchApiUrl: 'https://registry.npmjs.org/-/v1/search',
    packageApiUrl: 'https://registry.npmjs.org',
    resultsOnPage: 10,
    isLoading: false,
    isPopupLoading: false,
  };
}

export default state;
