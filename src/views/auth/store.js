import api from '@/api/Api';
import { createNamespacedHelpers } from 'vuex';


const timeout = () => new Promise((resolve) => setTimeout(resolve, 1500));

const TYPES = Object.freeze({
  SET_TOKEN: 'SET_TOKEN',
});

const createStore = () => ({
  email: '',
  // password: '',
  token: '',
});

const actions = {
  async login({ commit }, params) {
    const { data } = await api.login(params.email, params.password, true);
    commit(TYPES.SET_TOKEN, data);
  },

  async logon({ commit }, params) {
    const { data } = await api.logon(params.email, params.password, true);
    commit(TYPES.SET_TOKEN, data);
  },

  async resetPasswordWithEmail(context, params) {
    await timeout(params);
  },

  async resetPasswordWithHash(context, params) {
    await timeout(params);
  },
};

const mutations = {
  [TYPES.SET_TOKEN](state, payload) {
    state.token = payload.idToken;
    state.userId = payload.localId;
  },
};

const crudModule = {
  namespaced: true,
  store: createStore,
  actions,
  mutations,
};

const moduleName = 'auth';

export const authStoreHelper = createNamespacedHelpers(moduleName);

export const registerModule = (options) => (
  options.store.registerModule(moduleName, crudModule)
);
