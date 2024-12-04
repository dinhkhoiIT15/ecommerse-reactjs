import axiosClient from "./axiosClient";

const getProducts = async (query) => {
    //Get products
    const { sortType, page, limit } = query;

    const queryLimit = limit === "all" ? "" : `limit=${limit}`;

    const res = await axiosClient.get(
        `/product?sortType=${sortType}&page=${page}&${queryLimit}`
    );

    return res.data;
};

export { getProducts };
