import type { ReactNode } from "react";

// react hook form type
import type {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";


//  registerFormdata
import type { RegisterFormData } from "../../Auth";
// reusable InputForm component
import FormInput from "../FormInput/FormInput";

// reusable Button component
import Button from "../../../ui/Button/Button";

// send user data fn
import { sendUserData } from "../../../../services/authServices";
// toas
import toast from "react-hot-toast";
// react query for post data
import { useMutation } from "@tanstack/react-query";

export type RegisterFormProps = {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
  handleSubmit: UseFormHandleSubmit<RegisterFormData>;
  reset: UseFormReset<RegisterFormData>;
  forwardStep:React.Dispatch<React.SetStateAction<number>>
};

const RegisterForm = ({
  errors,
  handleSubmit,
  register,
  reset,
  forwardStep


}: RegisterFormProps): ReactNode => {


  const { isPending, mutateAsync } = useMutation({
    mutationFn: sendUserData,
  });


  const formSubmitHandler = async (Values: RegisterFormData):Promise<void> => {
    if (!Values) {
      return;
    }

    try {
      const response = await mutateAsync(Values);
      console.log(response);
      if (response) {
        toast.success("create account successfully");
        reset();
        forwardStep(2)
      }
    } catch (error) {
      error instanceof Error
        ? toast.error(error.message)
        : toast.error("Unknown Error");
    }
  };


  return (
    <div className="flex flex-col items-center my-8 w-full">
      <h2 className="my-3 text-3xl capitalize font-serif text-blue-400 font-semibold">
        register form
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
          label="name"
          error={errors.name?.message}
          {...register("name")}
          placeholder="name"
        />
        <FormInput
          label="password"
          error={errors.password?.message}
          {...register("password")}
          placeholder="password"
        />

        <FormInput
          label="avatar"
          error={errors.avatar?.message}
          {...register("avatar")}
          placeholder="avatar"
        />

        <Button type="submit">
          {isPending ? "sending" : "send"}
        </Button>
      </form>
      <Button className="my-2" variant="outline" onClick={()=>forwardStep(2)}>I have an account</Button>
    </div>
  );
};

export default RegisterForm;
