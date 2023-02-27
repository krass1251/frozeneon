import getState from '@/store/packages/state';
import getters from '@/store/packages/getters';
import mutations from '@/store/packages/mutations';
import actions from '@/store/packages/actions';

const packages = {
  namespaced: true,
  state: getState(),
  getters,
  mutations,
  actions,
};

export default packages;
