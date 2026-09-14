import type { ReactNode } from "react"
import  TextInput from "./../../../ui/TextInput/TextInput";

type SentOtpProps={
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
  onSubmit:(e:React.SubmitEvent<HTMLFormElement>)=>void,
  mobile:string
}
 const SentOtp = ({onChange,onSubmit,mobile}:SentOtpProps):ReactNode => {
  return (
    <div className="flex items-center justify-center px-4">
    <form className="w-full max-w-xs border border-gray-400/40 shadow-md rounded-md p-2"   onSubmit={onSubmit}>
         <TextInput type="text" label="add your mobile" name="mobile" value={mobile} onChange={onChange}/>
         <button type="submit" className="btn">send</button>
    </form>
    </div>
  );
}

export default SentOtp;
