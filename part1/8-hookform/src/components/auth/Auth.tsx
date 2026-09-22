import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import type z from "zod";

import { registerSchema } from "../../schema/registerSchema";
import { loginSchema } from "../../schema/loginSchema";



export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData=z.infer<typeof loginSchema>

const Auth = () => {

 const [step,setStep]=useState(1);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });


   const {
    register:registerLogin,
    formState: { errors:errorsLogin },
    handleSubmit:HandleSubmitLogin,
    reset:resetLogin,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });




  const renderForm = () => {
    switch (step) {
      case 1: {
        return <RegisterForm forwardStep={setStep} register={register} errors={errors} handleSubmit={handleSubmit} reset={reset} />;
      }

      case 2: {
        return <LoginForm  register={registerLogin} errors={errorsLogin} handleSubmit={HandleSubmitLogin} reset={resetLogin} />;
      }
    }
  };

  return <>{renderForm()}</>;
};
export default Auth;
