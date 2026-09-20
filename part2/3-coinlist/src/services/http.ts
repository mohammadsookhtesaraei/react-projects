import axios from "axios";

const key = "CG-3ebo5VJVAykgSkoJqMpC2fLN";

const app = axios.create({ baseURL: "https://api.coingecko.com/api/v3" });



app.interceptors.request.use(
    (request) => {

        request.headers["x-cg-demo-api-key"] = key;
        return request

    },

    (error)=>Promise.reject(error)
);


app.interceptors.response.use(
    (response) => response,

    (error)=>Promise.reject(error)
);



export default app;
