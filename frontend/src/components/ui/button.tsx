import * as React from "react";
import { cn } from "@/utils/cn";
import { ClipLoader } from "react-spinners";

const variants = {
  default: "bg-primary text-white shadow hover:bg-primary/90",
  destructive: "bg-destructive text-white shadow-sm hover:bg-red/90",
  outline:
    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-[22px] rounded-md px-3 text-xs",
  md: "py-1 px-6 rounded-sm text-md",
  lg: "h-[40px] rounded-md px-8 ",
  icon: "h-9 w-9",
};

interface Props {
  className?: string;
  variant?: "default" | "destructive" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: Props) => {
  const Component = asChild ? "span" : "button";

  return (
    <Component
      className={cn(
        variants[variant],
        sizes[size],
        className,
        "inline-flex items-center justify-center rounded-md font-medium transition-colors outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none gap-2 "
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <React.Fragment>
          <ClipLoader size={20} color="#fff" /> <span>Loading..</span>
        </React.Fragment>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
