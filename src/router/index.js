import Vue from 'vue';
import VueRouter from 'vue-router';
import { createRoutes } from './routes';

import { createAuthGuard2 } from './guards/create-auth-guard';


Vue.use(VueRouter);

export const createRouter = (options) => {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: createRoutes(options),
  });

  const authGuard = createAuthGuard2(options);
  router.beforeEach(authGuard);

  return router;
};
