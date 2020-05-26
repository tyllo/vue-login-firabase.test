import VueCookies from 'vue-cookies';


const isProd = process.env.NODE_ENV === 'production';
const BASE_DOMAIN = isProd ? process.env.VUE_APP_URL : 'localhost';

class PathCookies {
  constructor(keyName) {
    this.keyName = keyName;
    this.baseDomain = BASE_DOMAIN;
    this.secure = false; // isProd
  }

  get() {
    return VueCookies.get(this.keyName);
  }

  set(data, expireTimes = '1d', path = null) {
    VueCookies.set(this.keyName, data, expireTimes, path, this.baseDomain, this.secure);
  }

  remove() {
    VueCookies.remove(this.keyName, '/', this.baseDomain);
  }
}

export const CookiesService = {
  idToken: new PathCookies('idToken'),
  email: new PathCookies('email'),
  refreshToken: new PathCookies('refreshToken'),
  expiresIn: new PathCookies('expiresIn'),
  localId: new PathCookies('localId'),
};
