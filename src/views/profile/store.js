import api from '@/api/Api';
import { createNamespacedHelpers } from 'vuex';


const TYPES = Object.freeze({
  SET_DATA: 'SET_DATA',
});

const createState = () => ({
  profile: {},
});

const actions = {
  getProfile: {
    root: true,
    async handler({ commit, rootState }) {
      const response = await api.getUser(rootState.auth.idToken);
      const user = response.users[0];
      commit(TYPES.SET_DATA, user);
    },
  },

  logout: {
    root: true,
    handler: ({ commit }) => commit(TYPES.SET_DATA, {}),
  },

};

const mutations = {
  [TYPES.SET_DATA](state, payload) {
    state.profile = payload;
  },
};

const crudModule = {
  namespaced: true,
  state: createState,
  actions,
  mutations,
};

const moduleName = 'profile';

export const profileStoreHelper = createNamespacedHelpers(moduleName);

export const registerModule = (options) => (
  options.store.registerModule(moduleName, crudModule)
);
