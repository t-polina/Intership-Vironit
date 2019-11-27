import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) { config.headers['Authorization'] = token; }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export const headers = axios;