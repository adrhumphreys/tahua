import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { Fragment } from "react";
import { Sprinkles } from "./Text.css";

const meta = {
  title: "UI/Text",
  component: Text,
  // parameters: {
  //   layout: "centered",
  // },
  args: {
    children: "Content",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

const fontSizes = [undefined, "p14", "p16", "p18", "p20", "p22"];
const fontWeights = [400, 500, 600, 700];

export const Sizes: Story = {
  args: {
    children: "",
  },
  render: function Render(args) {
    return (
      <>
        {fontSizes.map((size) => (
          <Fragment key={`${size}`}>
            {fontWeights.map((weight) => (
              <Text
                {...args}
                key={`${weight}-${size}`}
                weight={weight}
                size={size as Sprinkles["size"]}
              >
                {args.children
                  ? args.children
                  : `Font size ${size}, font weight ${weight}`}
              </Text>
            ))}
          </Fragment>
        ))}
      </>
    );
  },
};
