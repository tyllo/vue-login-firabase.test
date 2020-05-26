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
        props: true,
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthSendPasswordResetEmail.vue'),
      },
      {
        path: '/email-link',
        name: 'auth.email-link',
        meta: { requiresAuth: null },
        beforeEnter(to, from, next) {
          const { mode, oobCode } = to.query;
          const params = { oobCode };

          if (!oobCode) {
            //
          } else if (mode === 'verifyEmail') {
            next({ name: 'auth.verify-email.code', params });
            return;
          } else if (mode === 'resetPassword') {
            next({ name: 'auth.reset-password.code', params });
            return;
          }

          next({ name: 'home' });
        },
      },
      {
        path: '/verify-email/:oobCode',
        name: 'auth.verify-email.code',
        meta: { requiresAuth: null },
        props: true,
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthVerifyEmail.vue'),
      },
      {
        path: '/reset-password/:oobCode',
        name: 'auth.reset-password.code',
        meta: { requiresAuth: false },
        props: true,
        component: () => import(/* webpackChunkName: "auth.section" */ './AuthResetPassword.vue'),
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
