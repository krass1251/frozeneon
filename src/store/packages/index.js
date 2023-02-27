import getState from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const packages = {
  namespaced: true,
  state: getState(),
  getters,
  mutations,
  actions,
};

export default packages;
