import type { ComponentProps, ReactNode } from "react"

import clsx from "clsx";


type Variant="outline"| "primary" | "default";

type ButtonProps=ComponentProps<"button"> & {
  varinat?:Variant
};

const buttonVariants:Record<Variant,string> = {
 default:"btn",
 primary:"btn-primary",
 outline:"btn-outline"
};



 const Button = ({children,className,varinat="default",...otherProps}:ButtonProps):ReactNode => {
  return (
    <button className={clsx("btn",buttonVariants[varinat],className)} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
