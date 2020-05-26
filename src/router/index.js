import Vue from 'vue';
import VueRouter from 'vue-router';
import { createRoutes } from './routes';

import { createAuthGuard } from './guards/create-auth-guard';


Vue.use(VueRouter);

export const createRouter = (options) => {
  const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: createRoutes(options),
  });

  const authGuard = createAuthGuard(options);
  router.beforeEach(authGuard);

  return router;
};
