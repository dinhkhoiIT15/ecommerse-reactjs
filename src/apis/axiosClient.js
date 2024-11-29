import axios from "axios"; //or const axios = require('axios');
import Cookies from "js-cookie";

const axiosClient = axios.create({
    baseURL: "https://be-project-reactjs.onrender.com/api/v1", //base url cua server API
    timeout: 10000, //thoi gian gui request 10s
    headers: {
        "Content-Type": "application/json"
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        const token = Cookies.get("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axiosClient.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalRequest = err.config;

        if (err.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = Cookies.get("refreshToken");

            if (!refreshToken) {
                try {
                    const res = await axiosClient.post("/refresh-token", {
                        token: refreshToken
                    });
                    const newAccessToken = res.data.accessToken;
                    Cookies.set("token", newAccessToken);
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosClient(originalRequest);
                } catch (error) {
                    Cookies.remove("token");
                    Cookies.remove("refreshToken");

                    return Promise.reject(error);
                }
            }
        }
    }
);

export default axiosClient;
