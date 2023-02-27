import axios from 'axios';

async function getPackages({ commit }, data) {
  const {
    url, text, from, size,
  } = data;
  let pagination = '';

  if (from) {
    pagination = `&from=${from}`;
  }

  try {
    const response = await axios.get(`${url}?text=${text}&size=${size}${pagination}`);
    commit('setPackageResults', response?.data?.objects || []);
    commit('setPackageResultsTotal', response?.data?.total || 0);
  } catch (e) {
    console.error(e);
    commit('setPackageResults', []);
    commit('setPackageResultsTotal', 0);
  }
}

export default getPackages;
