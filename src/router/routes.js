import AuthRoutes from '@/views/auth/routes';
import HomeRoutes from '@/views/home/routes';
import ErrorRoutes from '@/views/errors/routes';


const createGetRoutes = (options, list) => {
  const result = list.reduce((acc, routes) => {
    /* eslint no-param-reassign: 0 */
    routes = typeof routes === 'function' ? routes(options) : routes;
    return acc.concat(routes);
  }, []);

  return result;
};

export const createRoutes = (options) => createGetRoutes(options, [
  // must be first
  HomeRoutes,

  AuthRoutes,

  // must be last, because in error - `*` route
  ErrorRoutes,
]).filter(Boolean).flat();
