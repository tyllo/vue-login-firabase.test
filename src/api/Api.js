import axios from 'axios';

// TODO: axios.CancelToken
// TODO: onDownloadProgress

class ApiService {
  constructor(key) {
    const axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axiosInstance.interceptors.response.use(({ data }) => data);

    axiosInstance.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.params = { ...config.params, key };
      return config;
    });

    this.api = axiosInstance;
  }

  logon(params) {
    return this.api.post('accounts:signUp', params);
  }

  login(data) {
    return this.api.post('accounts:signInWithPassword', data);
  }

  getUser(idToken) {
    const data = { idToken };
    return this.api.post('accounts:lookup', data);
  }

  updateUser(idToken, params) {
    const data = { idToken, ...params };
    return this.api.post('accounts:update', data);
  }

  sendEmailVerification(idToken) {
    const data = { idToken, requestType: 'VERIFY_EMAIL' };
    const headers = { 'X-Firebase-Locale': 'ru' };
    return this.api.post('accounts:sendOobCode', data, { headers });
  }

  confirmEmailVerification(params) {
    const data = { ...params };
    return this.api.post('accounts:update', data);
  }
}

export default new ApiService(process.env.VUE_APP_API_KEY);
