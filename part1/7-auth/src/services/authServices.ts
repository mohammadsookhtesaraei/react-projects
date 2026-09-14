import app from "./http";




export const getOtpMobile=(mobile:string)=>{
    return app.post("auth/send-otp",{mobile}).then(({data})=>data || false)
}


export const getCheckOtpMobile=(mobile:string,code:string)=>{
    return app.post("auth/check-otp",{mobile,code}).then(({data})=>data || false);
}