import type { ComponentProps, ReactNode } from "react"
import { useId } from "react";

type TextInputProps=ComponentProps<"input"> & {
  label:string
};

 const TextInput = ({label,className,...otherProps}:TextInputProps):ReactNode => {
  const id=useId();

  return (
    <div className="">
    <label className="block" htmlFor={id}>{label}</label>
    <input className="w-full text-blue-400 placeholder:text-gray-300 border border-gray-300 rounded-md py-1 px-1 focus:outline-none" id={id} {...otherProps} />
    </div>
  );
}

export default TextInput;
