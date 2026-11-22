import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "btn-shine inline-flex items-center justify-center rounded-xl font-medium cursor-pointer " +
    "transition-[transform,box-shadow,background-color,border-color,color] duration-300 " +
    "active:translate-y-0 hover:-translate-y-0.5 " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";

  const variants = {
    // dark text on bright sea green = best contrast (about 9:1)
    primary:
      "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25",
    secondary:
      "glass-sea text-white hover:bg-white/10 hover:border-cyan-400/40",
    outline:
      "border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
