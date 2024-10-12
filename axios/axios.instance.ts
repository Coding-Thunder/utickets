import { config } from '@/lib/utils';
import axios from 'axios';


// Determine the base URL based on the environment
const baseURL = !(process.env.NODE_ENV === 'production')
    ? config.productionServerUrl
    : config.localServerUrl; // Development URL


const publicAxiosInstance = axios.create({
    baseURL, // Use baseURL from your config or set it directly
    timeout: 30000, // Set to 30 seconds
    headers: {
        'Content-Type': 'application/json',
        // 'Origin' header is usually set automatically by the browser
        // You can specify it if needed, but it's not commonly required for client-side requests
    },
});

const privateAxiosInstance = axios.create({
    baseURL: process.env.NEXT_API_BASE_URL, // Use baseURL from your config or set it directly
    timeout: 10000, // Set a timeout if desired
    headers: {
        'Content-Type': 'application/json',
        // Add other default headers here if needed
    },
});

// Optional: Add request interceptor
privateAxiosInstance.interceptors.request.use(
    (request) => {
        request.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
        // Add Authorization headers or modify request here if needed
        // e.g., request.headers['Authorization'] = `Bearer ${token}`;
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// // Optional: Add response interceptor
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         // Handle errors globally
//         return Promise.reject(error);
//     }
// );



const instance = {
    privateAxiosInstance,
    publicAxiosInstance
}

export default instance