import { style } from "@vanilla-extract/css";
import isObject from "lodash/isObject";
import type { StyleRule } from "@vanilla-extract/css";
import { breakpoints, Breakpoint } from "./tokens";

/**
 * Experimental responsive util which allows you to use the media queries
 * inline, e.g.
 * const button = responsiveStyleMap({
 *   color: 'red',
 *   md: {
 *     color: 'blue
 *   }
 * })
 */

type ResponsiveProps<T> = {
  [Type in Breakpoint]?: T;
};

export const resolveBreakpoints = (variant: any, attr: any, acc: any) => {
  if (isObject(variant[attr])) {
    (Object.keys(variant[attr]) as Breakpoint[]).reduce(
      (acc, breakpointKey) => {
        const handleBreakpoint = Object.prototype.hasOwnProperty.call(
          breakpoints,
          breakpointKey
        );

        if (!handleBreakpoint) {
          acc[attr] = variant[attr];
          return acc;
        }

        if (breakpointKey === "xs") {
          acc[attr] = variant[attr].xs;
        } else {
          if (!acc["@media"]) {
            acc["@media"] = {};
          }
          if (!acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`]) {
            acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`] = {};
          }
          acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`] = {
            ...acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`],
            [attr]: variant[attr][breakpointKey],
          };
        }
        return acc;
      },
      acc
    );
  } else {
    acc[attr] = variant[attr];
  }
  return acc;
};

export const responsiveStyleMap = (
  styleObj: StyleRule & ResponsiveProps<StyleRule>
) =>
  style(
    Object.keys(styleObj).reduce(
      (acc, attr) => resolveBreakpoints(styleObj, attr, acc),
      {}
    )
  );
