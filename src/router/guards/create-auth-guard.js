
const DEFAULT_ROUTE = { name: 'auth.home' };

// eslint-disable-next-line consistent-return
export const createAuthGuard2 = ({ store }) => (to, from, next) => {
  const match = to.matched.find((record) => 'requiresAuth' in record.meta);
  const authorized = store?.getters?.isAuthorized;

  // если в дереве роутов нет meta.requiresAuth, то страница открыта
  if (!match) return next();

  switch (match.meta.requiresAuth) {
    case true:
      if (authorized || /^auth/.test(to.name)) {
        next();
      } else {
        next({ name: 'auth.login' });
      }
      break;

    case false:
      if (authorized) {
        next(DEFAULT_ROUTE);
      } else {
        next();
      }
      break;

    default:
      next();
  }
};
