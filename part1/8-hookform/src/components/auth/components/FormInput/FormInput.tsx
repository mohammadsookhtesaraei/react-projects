import clsx from "clsx";
import { useId, type ComponentProps, type ReactNode } from "react"


type FormInputProps=ComponentProps<"input"> & {
  label:string,
  error?:string | null,
}

const FormInput = ({label,error,...otherProps}:FormInputProps):ReactNode => {
  const id=useId();
  return (
    <div className="relative">
     <label className={clsx("",error&&"text-rose-500")} htmlFor={id}>{label}</label>
     <input className={clsx("form_input",error &&"border-rose-500 text-rose-500")} id={id} {...otherProps} />
     <span className={"absolute left-0 top-full text-sm text-rose-500"}>{error}</span>
    </div>
  )
}
export default FormInput