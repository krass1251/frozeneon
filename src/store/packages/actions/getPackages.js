import axios from 'axios';

async function getPackages({ commit }, data) {
  const {
    url, text, from, size,
  } = data;
  let pagination = '';

  if (from) {
    pagination = `&from=${from}`;
  }

  if (text.length < 2) {
    commit('setPackagesResults', []);
    commit('setPackagesResultsTotal', 0);
    return;
  }

  try {
    commit('setIsLoading', true);
    const response = await axios.get(`${url}?text=${text}&size=${size}${pagination}`);
    commit('setPackagesResults', response?.data?.objects || []);
    commit('setPackagesResultsTotal', response?.data?.total || 0);
    commit('setIsLoading', false);
  } catch (e) {
    console.error(e);
    commit('setPackagesResults', []);
    commit('setPackagesResultsTotal', 0);
    commit('setIsLoading', false);
  }
}

export default getPackages;
