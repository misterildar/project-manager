import {
  forwardRef,
  ButtonHTMLAttributes,
  ReactElement,
  cloneElement,
} from "react";
import { clsx } from "clsx";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size = "md", fullWidth, asChild, children, ...props },
    ref
  ) => {
    const classes = clsx(
      styles.btn,
      styles[variant],
      size !== "md" && styles[size],
      fullWidth && styles.full,
      className
    );

    if (asChild && children) {
      return cloneElement(children as ReactElement, {
        className: classes,
        ref,
        ...props,
      });
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
