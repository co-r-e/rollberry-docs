import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "custom";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover active:bg-primary-dark",
  outline:
    "border-2 border-primary text-primary hover:bg-primary-50 active:bg-primary-100",
  ghost:
    "text-text-secondary hover:text-text hover:bg-primary-50",
  custom: "",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-base transition-colors cursor-pointer select-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
