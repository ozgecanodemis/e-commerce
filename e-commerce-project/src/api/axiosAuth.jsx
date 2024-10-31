import axios from "axios";

export const axiosAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com/",
        headers: {
            Authorization: token,
        },
    });
};

export default axiosAuth;