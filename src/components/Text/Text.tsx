import { createElement, type CSSProperties, type ReactNode } from "react";
import { sprinkles, Sprinkles } from "./Text.css";
import clsx from "clsx";

type TextElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "span"
  | "div"
  | "label"
  | "caption";

interface Props extends Sprinkles {
  as?: TextElements;
  children: ReactNode;
  className?: string;
  UNSAFE_style?: CSSProperties;
}

export const Text = ({
  align,
  as,
  className,
  color,
  size,
  weight,
  UNSAFE_style = {},
  ...props
}: Props) => {
  const component = as ?? "p";

  return createElement(component, {
    ...props,
    style: UNSAFE_style,
    className: clsx(
      className,
      sprinkles({
        align,
        color,
        size,
        weight,
      })
    ),
  });
};

Text.displayName = "Text";
