import type { ComponentProps, ReactNode } from "react"
import { useId } from "react";

type TextInputProps=ComponentProps<"input"> & {
  label:string
};

 const TextInput = ({label,...otherProps}:TextInputProps):ReactNode => {
  const id=useId()
  return (
    <div className="">
      <label className="block my-1" htmlFor={id}>{label}</label>
      <input className="border border-gray-200 px-1 py-1 focus:outline-none focus:shadow-2xs focus:shadow-gray-200 transition-shadow duration-75" {...otherProps} />
    </div>
  );
}

export default TextInput;
