import { createNamespacedHelpers } from 'vuex';
import api from '@/api/Api';


const timeout = () => new Promise((resolve) => setTimeout(resolve, 1500));

const TYPES = Object.freeze({
  SET_TOKEN: 'SET_TOKEN',
});

const createState = () => ({
  idToken: '',
  email: '',
  refreshToken: '',
  expiresIn: '',
  localId: '',
});

const actions = {
  async login({ commit }, params) {
    const data = {
      email: params.email,
      password: params.password,
      returnSecureToken: true,
    };

    const response = await api.login(data);
    commit(TYPES.SET_TOKEN, response);
  },

  async logon({ commit }, params) {
    const data = {
      email: params.email,
      password: params.password,
      displayName: `${params.first_name} ${params.last_name}`,
      returnSecureToken: true,
    };

    const response = await api.logon(data);
    commit(TYPES.SET_TOKEN, response);
  },

  logout: {
    root: true,
    handler: ({ commit }) => commit(TYPES.SET_TOKEN, {}),
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
    state.idToken = payload.idToken;
    state.displayName = payload.displayName;
    state.email = payload.email;
    state.refreshToken = payload.refreshToken;
    state.expiresIn = payload.expiresIn;
    state.localId = payload.localId;
  },
};

const crudModule = {
  namespaced: true,
  state: createState,
  actions,
  mutations,
};

const moduleName = 'auth';

export const authStoreHelper = createNamespacedHelpers(moduleName);

export const registerModule = (options) => (
  options.store.registerModule(moduleName, crudModule)
);
