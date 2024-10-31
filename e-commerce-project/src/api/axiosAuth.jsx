import axios from "axios";

const axiosAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com/",
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        },
    });
};

export default axiosAuth;