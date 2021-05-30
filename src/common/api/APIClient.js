import axios from 'axios';

const defaultOptions = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 6000
};

let axiosInstance = axios.create(defaultOptions);

export default axiosInstance;
