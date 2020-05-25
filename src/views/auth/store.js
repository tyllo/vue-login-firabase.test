import { createNamespacedHelpers } from 'vuex';


const timeout = () => new Promise((resolve) => setTimeout(resolve, 1500));

const createStore = () => ({
});

const actions = {
  async login(context, params) {
    await timeout(params);
  },

  async logon(context, params) {
    await timeout(params);
  },

  async resetPasswordWithEmail(context, params) {
    await timeout(params);
  },

  async resetPasswordWithHash(context, params) {
    await timeout(params);
  },
};

const mutations = {
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
