import axios from "axios";

const axiosAuth = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
});

const token = localStorage.getItem("token");
if (token) {
    axiosAuth.defaults.headers.common['Authorization'] = token;
}

export default axiosAuth;