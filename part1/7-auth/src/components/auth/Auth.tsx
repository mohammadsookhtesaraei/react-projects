import { useState, type ReactNode } from "react"
import SentOtp from "./components/SentOtp/SentOtp";
import CheckOtp from "./components/CheckOtp/CheckOtp";
import { getOtpMobile } from "../../services/authServices";
import toast from "react-hot-toast";

const Auth = () => {
  // step state
  const [step,setStep]=useState(1);

  const [mobile,setMobile]=useState("");

  const handleChangeInput=(e:React.ChangeEvent<HTMLInputElement>):void=>{
  const value=e.target.value.replace(/\D/g, "");
  setMobile(value);
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

 }catch(error:unknown){

 }




 
  }



  // render steps fn with switch case
  const renderStepes=():ReactNode=>{
    switch(step){
      case 1 : {
          return <SentOtp onSubmit={handleSentOtpForm} onChange={handleChangeInput}/>
      }

      case 2 : {
        return <CheckOtp/>
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