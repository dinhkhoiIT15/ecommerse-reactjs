import axios from "axios"; //or const axios = require('axios');

const axiosClient = axios.create({
    baseURL: "https://be-project-reactjs.onrender.com/api/v1", //base url cua server API
    timeout: 10000, //thoi gian gui request 10s
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;
