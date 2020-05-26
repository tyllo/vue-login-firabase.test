import { createNamespacedHelpers } from 'vuex';
import api from '@/api/Api';
import { CookiesService } from '@/helpers/cookies.service';


const TYPES = Object.freeze({
  SET_TOKEN: 'SET_TOKEN',
  REMOVE_TOKEN: 'REMOVE_TOKEN',
});

const createState = () => ({
  idToken: CookiesService.idToken.get(),
  email: CookiesService.email.get(),
  refreshToken: CookiesService.refreshToken.get(),
  expiresIn: CookiesService.expiresIn.get(),
  localId: CookiesService.localId.get(),
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

  async logon({ commit, dispatch }, params) {
    const data = {
      email: params.email,
      password: params.password,
      displayName: `${params.first_name} ${params.last_name}`,
      returnSecureToken: true,
    };

    const response = await api.logon(data);

    commit(TYPES.SET_TOKEN, response);
    dispatch('sendEmailVerification');
  },

  logout: {
    root: true,
    handler: ({ commit }) => commit(TYPES.REMOVE_TOKEN),
  },

  sendEmailVerification({ state }) {
    return api.sendEmailVerification(state.idToken);
  },

  sendPasswordResetEmail(context, params) {
    return api.sendPasswordResetEmail(params.email);
  },

  verifyPasswordResetCode(context, params) {
    return api.verifyPasswordResetCode(params.oobCode);
  },

  confirmPasswordReset(context, params) {
    return api.confirmPasswordReset(params.oobCode, params.password);
  },

  async confirmEmailVerification({ dispatch }, params) {
    const response = await api.confirmEmailVerification(params);
    dispatch('getProfile', response, { root: true });
  },
};

const mutations = {
  [TYPES.SET_TOKEN](state, payload) {
    state.idToken = payload.idToken;
    state.email = payload.email;
    state.refreshToken = payload.refreshToken;
    state.expiresIn = payload.expiresIn;
    state.localId = payload.localId;

    const expires = `${state.expiresIn}s`;
    CookiesService.idToken.set(state.idToken, expires);
    CookiesService.email.set(state.email, expires);
    CookiesService.refreshToken.set(state.refreshToken, expires);
    CookiesService.expiresIn.set(state.expiresIn, expires);
    CookiesService.localId.set(state.localId, expires);
  },

  [TYPES.REMOVE_TOKEN](state) {
    state.idToken = null;
    state.email = null;
    state.refreshToken = null;
    state.expiresIn = null;
    state.localId = null;

    CookiesService.idToken.remove();
    CookiesService.email.remove();
    CookiesService.refreshToken.remove();
    CookiesService.expiresIn.remove();
    CookiesService.localId.remove();
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
