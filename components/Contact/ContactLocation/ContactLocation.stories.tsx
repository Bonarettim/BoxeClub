import type { Meta, StoryObj } from "@storybook/react";

import ContactLocation from "./ContactLocation";

const meta: Meta<typeof ContactLocation> = {
  title: "Contact/ContactLocation",
  component: ContactLocation,

};

export default meta;

type Story = StoryObj<typeof ContactLocation>;

export const Default: Story = {};