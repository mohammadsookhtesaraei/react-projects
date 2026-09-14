import { useState, type ReactNode } from "react"
import SentOtp from "./components/SentOtp/SentOtp";
import CheckOtp from "./components/CheckOtp/CheckOtp";

const Auth = () => {
  // step state
  const [step,setStep]=useState(1);



  // render steps fn with switch case
  const renderStepes=():ReactNode=>{
    switch(step){
      case 1 : {
          return <SentOtp/>
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