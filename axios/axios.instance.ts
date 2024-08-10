import { config } from '@/lib/utils';
import axios from 'axios';

const publicAxiosInstance = axios.create({
    baseURL: config.productionServerUrl, // Use baseURL from your config or set it directly
    timeout: 10000, // Set a timeout if desired
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "https://www.universalticketss.com/"
        // 'Origin': 'http://localhost:3000/', // Match the allowed origin in CORS
    },
    withCredentials: true // Ensure this is allowed in CORS settings
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