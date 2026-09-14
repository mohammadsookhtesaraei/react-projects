import axios from "axios";

import type { IAxios } from "../types/axios-interface";
import getCookie, { setCookie } from "../utils/cookie";





const app = axios.create({
    baseURL: "http://localhost:3400/",
    headers: {
        "Content-Type": "application/json"
    }
});



app.interceptors.request.use(
    (request) => {
        const accessToken = getCookie("accessToken");
        if (accessToken) {
            request.headers["Authorization"] = `bearer ${accessToken}`;
        }

        return request
    },
    (error) => Promise.reject(error)
);



app.interceptors.response.use(
    (response) => response.data,
    async(error) => {

        const orginalRequest=error.config;
        if(orginalRequest.response.status === 401 && !orginalRequest._retry){
            orginalRequest._retry=true;

            const refreshToken=getCookie("refreshToken");
            console.log(refreshToken);
            if(!refreshToken){
            return
            }

            try{
            const response=await app.post("auth/check-refresh-token",{refreshToken});
              console.log("✅ REFRESH RESPONSE:", response);
            if(!response){
               return Promise.reject(error);
            }
            setCookie(response.data);
            return app(orginalRequest)
            }catch(error){
              console.log(error);
                return Promise.reject(error);
            }
        }

        return Promise.reject(error)
    }
);


const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    patch: app.patch,
    put: app.put,
};


export default http as IAxios;