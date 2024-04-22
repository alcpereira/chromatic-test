import type { Meta, StoryObj } from "@storybook/react";

import Url from "./Url";

const meta = {
  title: "Url",
  component: Url,
} satisfies Meta<typeof Url>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
