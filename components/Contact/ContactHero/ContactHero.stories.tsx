import type { Meta, StoryObj } from "@storybook/react";

import ContactHero from "./ContactHero";

const meta: Meta<typeof ContactHero> = {
  title: "Contact/ContactHero",
  component: ContactHero,

};

export default meta;

type Story = StoryObj<typeof ContactHero>;

export const Default: Story = {};