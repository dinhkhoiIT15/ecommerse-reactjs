import axiosClient from "./axiosClient";

const getProduct = async () => {
    //call api bat dong bo phai su dung async - await
    const res = await axiosClient.get("/product");

    return res.data;
};

export { getProduct };
