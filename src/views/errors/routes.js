
const createRoutes = () => [
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "errors.section" */ './NotFound.vue'),
  },
];

const createModule = (options) => {
  const routes = createRoutes(options);
  return routes;
};

export default createModule;
