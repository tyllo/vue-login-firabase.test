import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';


Vue.use(Vuex);

export const createStore = () => new Vuex.Store({
  getters,
});
