import { registerModule } from './store';


const createRoutes = () => [
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'auth.login' },
    component: () => import(/* webpackChunkName: "auth.section" */ './AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'auth.login',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthLogin.vue'),
      },
      {
        path: '/logon',
        name: 'auth.logon',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthLogon.vue'),
      },
      {
        path: '/reset-password',
        name: 'auth.reset-password',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthResetPasswordWithEmail.vue'),
      },
      {
        path: '/reset-password/:hash',
        name: 'auth.reset-password.hash',
        props: true,
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthResetPasswordWithHash.vue'),
      },
      {
        path: '/auth-verify-email',
        name: 'auth.auth-verify-email',
        meta: { requiresAuth: null },
        props: ({ query: q }) => ({ mode: q.mode, oobCode: q.oobCode, lang: q.lang }),
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthVerifyEmail.vue'),
      },
    ],
  },
];

const createModule = (options) => {
  registerModule(options);
  const routes = createRoutes(options);
  return routes;
};

export default createModule;
