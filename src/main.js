import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import { createStore } from '@/store';
import { createRouter } from '@/router';


Vue.config.productionTip = false;

const store = createStore();
const router = createRouter({ store });

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
