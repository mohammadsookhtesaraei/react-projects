import type { ReactNode } from "react"
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import type { LoginFormData } from "../../Auth";
import FormInput from "../FormInput/FormInput";
import Button from "../../../ui/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { sendUserLoginData } from "../../../../services/authServices";
import axios from "axios";
import {setCookie } from "../../../../utils/cookie";
import toast from "react-hot-toast";

import { useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { useProfile } from "../../../../hooks/useProfile";

type LoginFormProps={
    register: UseFormRegister<LoginFormData>;
    errors: FieldErrors<LoginFormData>;
    handleSubmit: UseFormHandleSubmit<LoginFormData>;
    reset: UseFormReset<LoginFormData>;
    
};

 const LoginForm = ({register,reset,errors,handleSubmit}:LoginFormProps):ReactNode => {

  const queryClient=useQueryClient();
  const {refetch}=useProfile()
  const navigate=useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: sendUserLoginData,
  });

  const formSubmitHandler=async(Values:LoginFormData):Promise<void> => {
 if(!Values){
  return
 }

 try {

  const response=await mutateAsync(Values);
  if(!response){
    return
  }
  setCookie(response);
  refetch();

  toast.success("login successfully");

  reset();


  navigate("/dashboard",{replace:true})


 }catch(error){
if (axios.isAxiosError(error)) {
    toast.error("we have an error try again");
    console.log("data:", error.response?.data);
  }
 }
  }
  return (
    <div className="flex flex-col items-center my-8 w-full">
      <h2 className="my-3 text-3xl capitalize font-serif text-blue-400 font-semibold">
        LoginForm
      </h2>
        <form
        className="w-full  space-y-3 max-w-2xs border p-2 border-gray-400/30 rounded-md shadow-md"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <FormInput
          label="email"
          error={errors.email?.message}
          {...register("email")}
          placeholder="email"
        />
    
        <FormInput
          label="password"
          error={errors.password?.message}
          {...register("password")}
          placeholder="password"
        />

    

        <Button type="submit">
          {isPending ? "sending" : "send"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
