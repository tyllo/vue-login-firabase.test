
const createRoutes = () => [
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home.section" */ './Home.vue'),
  },
];

const createModule = (options) => {
  const routes = createRoutes(options);
  return routes;
};

export default createModule;
