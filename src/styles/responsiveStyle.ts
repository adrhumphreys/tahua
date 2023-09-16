import type { StyleRule } from "@vanilla-extract/css";
import { Breakpoint, breakpoints } from "./tokens";

// We define this as the default style rule, minus the `@media` property since we can't
// next media queries
type StyleWithoutMediaQueries = Exclude<StyleRule["@media"], undefined>[string];

type MediaQueryFunc = (
  styles: StyleWithoutMediaQueries
) => Record<string, StyleWithoutMediaQueries>;

// This produces a function which when called will return an object with the key set to
// the break point and the contents set to the args passed to it
const makeMediaQuery =
  (breakpoint: Breakpoint): MediaQueryFunc =>
  (styles: StyleWithoutMediaQueries) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
        };

// Create media queries for all the breakpoints
const mediaQueries = Object.keys(breakpoints).reduce((prev, curr) => {
  return {
    ...prev,
    [curr]: makeMediaQuery(curr as Breakpoint),
  };
}, {}) as Record<Breakpoint, MediaQueryFunc>;

// Partial, as you might only want to define one break point
type ResponsiveStyle = Partial<
  Record<Breakpoint, StyleWithoutMediaQueries | undefined>
>;

/**
 * Example usage:
 * export const root = style({
 *   color: "red",
 *   ...responsiveStyle({
 *     md: {
 *       color: "purple",
 *     },
 *     lg: {
 *       color: "blue",
 *     },
 *   }),
 * });
 */
export const responsiveStyle = (styleMap: ResponsiveStyle): StyleRule => {
  const queries = Object.entries(styleMap).reduce(
    (prev, [breakpoint, style]) => {
      if (!style) return prev;
      return {
        ...prev,
        ...mediaQueries[breakpoint as Breakpoint](style),
      };
    },
    {}
  );

  return {
    "@media": queries,
  };
};
