import axios from "axios";

import type { IAxios } from "../types/axios-interface";

import { setCookie, getCookie } from "../utils/cookie";





const app = axios.create({
    baseURL: "http://localhost:3400/",
    headers: {
        "Content-Type": "application/json"
    }
}) as IAxios;/* تایپ نمونه که از فولدر تایپ میاد */



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
    async (error) => {

        //  این میاد ارور های درخواست اصلی که خطا خرده رو میگیره داخل این هست
        const orginalRequest = error.config;

        // اینجا حواست باشه ریسپانس ارور رو بگیری
        // واگه اولین درخواستش هس که ارور خرده یعنی قبلا تلاش نکرده پس اندیفاینده بیا ترو کن
        if (error.response.status === 401 && !orginalRequest._retry) {
            // درخواست های بعدیشو کنسل کن با ترو گذاشتن تا شرط ایف اجرا نشه
            orginalRequest._retry = true;

            // رفرش توکن رو از کوکی بکیر
            const refreshToken = getCookie("refreshToken");
            if (!refreshToken) {
                return
            }



            // دئباره درخواست رفرش بده اگه رفرش داشت فقط اکسس نداشت
            // بکند از طریق رفرش میفهمه کیه یک اکسس جدید میده
            // دوباره اون رو داخل کوکی رفرش و اکسس جدید رو ست کن چون اکسسش منقضی شده اکسس نداره دیگه
            // در اخرم اون درخواستی که به ارور خرده رو برگردون تا ارورش رفع بشه

            try {
                const response = await app.post("auth/check-refresh-token", { refreshToken: refreshToken });
                if (!response) {
                    return
                }
                setCookie(response);
                return app(orginalRequest)
            } catch (error) {
                console.log(error);
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