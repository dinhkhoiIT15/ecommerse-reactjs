import axiosClient from "./axiosClient";

const register = async (body) => {
    return await axiosClient.post("/register", body);
};

const signIn = async (body) => {
    return await axiosClient.post("/login", body);
};

const getInfo = async () => {
    return await axiosClient.get(
        "user/info/d43f757f-d879-4f53-bbc0-f74486ee2c68"
    );
};

export { register, signIn, getInfo };
