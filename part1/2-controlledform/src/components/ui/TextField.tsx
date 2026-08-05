import type { ComponentPropsWithoutRef } from "react";

type TextFieldProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

const TextField = ({ id, label, type, ...props }: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="mr-2 mb-1 inline-block">
        {label}
      </label>

      <input
        className="block w-full rounded-md border border-gray-500/30 px-1 py-1 transition-shadow focus:shadow-md focus:shadow-purple-400 focus:outline-none"
        id={id}
        type={type}

        {...props}
      />
    </div>
  );
};

export default TextField;
