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
      <input  className="text_input" id={id} {...otherProps} autoComplete="off" />
    </div>
  );
}

export default TextInput;
