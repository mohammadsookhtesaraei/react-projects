import clsx from "clsx";

import type { ComponentProps } from "react";

type TButtonVariant = "outline" | "primary";

type ButtonProps = ComponentProps<"button"> & {
  variant?: TButtonVariant;
};

const buttonVariant: Record<TButtonVariant, string> = {
  outline: "btn_outline",
  primary: "btn_primary",
};

const Button = ({
  variant = "primary",
  children,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={clsx("btn", buttonVariant[variant], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
