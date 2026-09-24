import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark-900";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent-blue text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-gradient-to-r from-accent-cyan to-accent-green text-white hover:shadow-lg hover:shadow-accent-cyan/25 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-surface-border text-text-primary hover:border-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-surface-light/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm ",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}