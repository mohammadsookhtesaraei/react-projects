import type { ReactNode } from "react";
import TextInput from "../../../ui/TextInput/TextInput";

type CheckOtpProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  code:string
};

const CheckOtp = ({ onChange, onSubmit,code }: CheckOtpProps): ReactNode => {
  return (
    <div className="flex items-center justify-center px-4">
      <form
        className="w-full max-w-xs border border-gray-400/40 shadow-md rounded-md p-2"
        onSubmit={onSubmit}
      >
        <TextInput type="text" label="enter otp code" value={code} name="code" onChange={onChange} />
        <button type="submit" className="btn">
          send
        </button>
      </form>
    </div>
  );
};

export default CheckOtp;
