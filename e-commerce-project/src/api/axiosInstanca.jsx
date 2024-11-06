// src/api/axiosInstanca.jsx

import axios from 'axios';

const myApi = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default myApi;  // Ensure it's a default export
