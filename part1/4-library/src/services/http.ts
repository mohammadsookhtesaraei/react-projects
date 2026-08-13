import axios from "axios";


const app = axios.create({ baseURL: "http://localhost:3500" });


app.interceptors.response.use(

    (response) => response.data,
    (error) => Promise.reject(error)
);

const http = {
    get: app.get,
    post: app.post,
    patch: app.patch
};


export { http };