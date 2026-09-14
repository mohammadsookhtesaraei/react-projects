import axios from "axios";

import type { IAxios } from "../types/axios-interface";





const app = axios.create({
    baseURL: "http://localhost:3400/",
    headers: {
        "Content-Type": "application/json"
    }
});



app.interceptors.request.use(
    (request) => {
        return request
    },
    (error) => Promise.reject(error)
);



app.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);


const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    patch: app.patch,
    put: app.put,
};


export default http as IAxios;