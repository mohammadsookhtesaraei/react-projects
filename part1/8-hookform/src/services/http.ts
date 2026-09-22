import axios from "axios";
import type { IAxios } from "../types/axios-interface";
import { getCooke, setCookie } from "../utils/cookie";

const app = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1", headers: {
        "Content-Type": "application/json"
    }
}) as IAxios;

const refreshClient = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1", headers: {
        "Content-Type": "application/json"
    }
}) as IAxios;


app.interceptors.request.use(

    (request) => {

        const accessToken = getCooke("accessToken");

        if (accessToken) {
            request.headers["Authorization"] = ` bearer ${accessToken}`;
        }


        return request
    },
    (error) => Promise.reject(error)
);

// auth/refresh-token
app.interceptors.response.use(
    (response) => response,
    async (error) => {

        const orginalRequest = error.config;

        if (error.response.status === 401 && ! orginalRequest._retry) {
            orginalRequest._retry = true;
            const refreshToken = getCooke("refreshToken");
            if (!refreshToken) {
                return
            }

            try {
                const response = await refreshClient.post("/auth/refresh-token", { refreshToken });
                if (!response) {
                    return Promise.reject(error);
                }

                setCookie(response.data);
                return app(orginalRequest)
            } catch (error) {

                document.cookie = "accessToken=; max-age=0; path=/";
                document.cookie = "refreshToken=; max-age=0; path=/";
                return Promise.reject(error);
            }

        }


        return Promise.reject(error)
    }
);





const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    patch: app.patch,
    delete: app.delete
};


export default http





