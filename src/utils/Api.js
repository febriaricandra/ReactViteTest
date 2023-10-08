import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://cms-admin-v2.ihsansolusi.co.id/testapi/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Add a request interceptor to set the Authorization header
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;