
const createRoutes = () => [
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'auth.login' },
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: "auth.section" */ './AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthLogin.vue'),
      },
      {
        path: '/logon',
        name: 'auth.logon',
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthLogon.vue'),
      },
      {
        path: '/reset-password',
        name: 'auth.reset-password',
        props: true,
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthResetPassword.vue'),
      },
    ],
  },
];

const createModule = (options) => {
  const routes = createRoutes(options);
  return routes;
};

export default createModule;
