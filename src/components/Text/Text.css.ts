import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { breakpointConditions } from "../../styles";

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    fontSize: {
      p14: "0.875rem",
      p16: "1rem",
      p18: "1.125rem",
      p20: "1.25rem",
      p22: "1.375rem",
    },
    lineHeight: {
      p14: 1.3,
      p16: 1.25,
      p18: 1.3,
      p20: 1.3,
      p22: 1.3,
    },
    fontWeight: [400, 500, 600, 700],
    color: {
      subtle: "gray",
    },
    textAlign: ["left", "center", "right"],
  },
  shorthands: {
    align: ["textAlign"],
    size: ["fontSize", "lineHeight"],
    weight: ["fontWeight"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
