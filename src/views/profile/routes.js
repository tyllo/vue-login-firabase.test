import { registerModule } from './store';


const createModule = (options) => {
  registerModule(options);
  const routes = [];
  return routes;
};

export default createModule;
