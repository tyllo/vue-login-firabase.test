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

  logon(email, password, returnSecureToken) {
    const data = { email, password, returnSecureToken };
    return this.api.post('accounts:signUp', data);
  }

  login(email, password, returnSecureToken) {
    const data = { email, password, returnSecureToken };
    return this.api.post('accounts:signInWithPassword', data);
  }
}

export default new ApiService(process.env.VUE_APP_API_KEY);
