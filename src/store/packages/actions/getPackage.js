import axios from 'axios';

async function getPackage({ commit }, data) {
  const {
    url, name,
  } = data;

  try {
    commit('setIsPopupLoading', true);
    const response = await axios.get(`${url}/${name}`);
    commit('setPackageResult', response?.data || {});
    commit('setIsPopupLoading', false);
  } catch (e) {
    console.error(e);
    commit('setPackageResult', {});
    commit('setIsPopupLoading', false);
  }
}

export default getPackage;
