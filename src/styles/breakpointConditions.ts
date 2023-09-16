import { breakpoints } from "./tokens";

// Convert breakpoints to sprinkles internal conditions
export const breakpointConditions: Record<string, { "@media": string }> =
  Object.entries(breakpoints).reduce((prev, curr) => {
    const [key, value] = curr;
    if (key === "xs") {
      return {
        ...prev,
        [key]: {},
      };
    }
    return {
      ...prev,
      [key]: { "@media": `screen and (min-width: ${value}px)` },
    };
  }, {});
