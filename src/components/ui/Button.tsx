import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant = "primary", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        variant === "secondary" && "border border-input hover:bg-secondary/50",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        size === "default" && "px-4 py-2",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "lg" && "px-8 py-3 text-lg",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";
