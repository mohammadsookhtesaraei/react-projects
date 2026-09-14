import app from "./http";




export const getOtpMobile=(mobile:string)=>{
    return app.post("auth/send-otp",{mobile})
}