import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints } from "./tokens";

const baseNone = style({ display: "none" });
const baseShow = style({ display: "block" });

export const lteBlockVariants = styleVariants(breakpoints, (breakpoint) => [
  baseNone,
  {
    "@media": {
      [`screen and (min-width: ${breakpoint}px)`]: {
        display: "block",
      },
    },
  },
]);

export const lteInlineVariants = styleVariants(breakpoints, (breakpoint) => [
  baseNone,
  {
    "@media": {
      [`screen and (min-width: ${breakpoint}px)`]: {
        display: "inline",
      },
    },
  },
]);

export const gteBlockVariants = styleVariants(breakpoints, (breakpoint) => [
  baseShow,
  {
    "@media": {
      [`screen and (min-width: ${breakpoint}px)`]: {
        display: "none",
      },
    },
  },
]);

export const gteInlineVariants = styleVariants(breakpoints, (breakpoint) => ({
  display: "inline",
  "@media": {
    [`screen and (min-width: ${breakpoint}px)`]: {
      display: "none",
    },
  },
}));

export const hidden = {
  lte: lteBlockVariants,
  gte: gteBlockVariants,
  inline: {
    lte: lteInlineVariants,
    gte: gteInlineVariants,
  },
};
