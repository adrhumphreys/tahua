import type { ButtonHTMLAttributes, FC } from "react";
import { ButtonVariants, button } from "./Button.css";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
} & ButtonVariants;

export const Button: FC<Props> = ({
  color,
  size,
  rounded,
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(button({ color, size, rounded }), className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
