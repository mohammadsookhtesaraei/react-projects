import axios from "axios";

import type { IAxios } from "../types/axios-interface";

import { setCookie, getCookie } from "../utils/cookie";





const app = axios.create({
    baseURL: "http://localhost:3400/",
    headers: {
        "Content-Type": "application/json"
    }
}) as IAxios;/* تایپ نمونه که از فولدر تایپ میاد */

const refreshClient = axios.create({ baseURL: "http://localhost:3400/" }) as IAxios;



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
    (response) => response,
    async (error) => {

  
      const orginalRequest = error.config;

    //     / اینجا حواست باشه ریسپانس ارور رو بگیری
    //     // واگه اولین درخواستش هس که ارور خرده یعنی قبلا تلاش نکرده پس اندیفاینده بیا ترو کن
       if (error.response.status === 401 && !orginalRequest._retry) {
    //         // درخواست های بعدیشو کنسل کن با ترو گذاشتن تا شرط ایف اجرا نشه
            orginalRequest._retry = true;

            // رفرش توکن رو از کوکی بکیر
            const refreshToken = getCookie("refreshToken");
            if (!refreshToken) {
               return Promise.reject(error);
           }




            try {
                const response = await refreshClient.post("auth/check-refresh-token", { refreshToken: refreshToken });
                if (!response) {
                   return Promise.reject(error);
               }
                setCookie(response.data);
                return app(orginalRequest)
            } catch (error) {
                console.log(error);
                document.cookie = "accessToken=; max-age=0; path=/";
                document.cookie = "refreshToken=; max-age=0; path=/";
               return Promise.reject(error)
           }

        }


         return Promise.reject(error)
    }
)




const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    patch: app.patch,
    put: app.put,
};


export default http;