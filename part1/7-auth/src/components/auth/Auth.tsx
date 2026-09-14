import { useState, type ReactNode } from "react"
import SentOtp from "./components/SentOtp/SentOtp";
import CheckOtp from "./components/CheckOtp/CheckOtp";
import { getCheckOtpMobile, getOtpMobile } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/cookie";
import { useProfile } from "../../hooks/useProfile";

const Auth = () => {
 const {refetch}=useProfile();

  const navigate=useNavigate();
  // step state
  const [step,setStep]=useState(1);

  const [mobile,setMobile]=useState("");
  const [code,setCode]=useState("")

  const handleChangeInput=(e:React.ChangeEvent<HTMLInputElement>):void=>{
  const value=e.target.value.replace(/\D/g, "");
  setMobile(value);
  };

  const handleChangeCodeInput=(e:React.ChangeEvent<HTMLInputElement>):void=>{
  const value=e.target.value.replace(/\D/g, "");
  setCode(value);
  };

  const handleSentOtpForm=async(e:React.SubmitEvent<HTMLFormElement>):Promise<void>=>{
  e.preventDefault();

 const isValidate=mobile.length === 11;

 if(!isValidate){
  return
 }

 try{
 const {message}=await getOtpMobile(mobile) as {message:string};
 toast.success(message)
 setStep(2);
 }catch(error:unknown){
 error instanceof Error ? 
 toast.error(error.message)
 :toast.error("unknown error")
 }




 
  }


   const handleCheckOtpForm=async(e:React.SubmitEvent<HTMLFormElement>):Promise<void>=>{
  e.preventDefault();

 const isValidate=code.length === 5;

 if(!isValidate){
  return
 }

 try{
 const data=await getCheckOtpMobile(mobile,code);
if(data){
setCookie(data);
refetch();
toast.success(data.message)
setMobile("");
setCode("");
// navigate("/",{replace:true})
 }


 }catch(error:unknown){
 error instanceof Error ? 
 toast.error(error.message)
 :toast.error("unknown error")
 }




 
  }




  // render steps fn with switch case
  const renderStepes=():ReactNode=>{
    switch(step){
      case 1 : {
          return <SentOtp mobile={mobile} onSubmit={handleSentOtpForm} onChange={handleChangeInput}/>
      }

      case 2 : {
        return <CheckOtp code={code} onChange={handleChangeCodeInput} onSubmit={handleCheckOtpForm}/>
      }
    
    }
  };


  return (
    <>
    {renderStepes()}
    </>
  )
}
export default Auth