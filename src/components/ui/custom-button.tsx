
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  asChild?: boolean;
  href?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false, 
    asChild = false,
    href,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = "btn-hover inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-primary text-primary hover:bg-primary/5",
      ghost: "bg-transparent text-foreground hover:bg-secondary",
    };
    
    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-2.5",
      lg: "text-lg px-8 py-3.5",
    };
    
    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth ? "w-full" : "",
      className
    );
    
    if (href) {
      return (
        <Link 
          to={href} 
          className={classes}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
