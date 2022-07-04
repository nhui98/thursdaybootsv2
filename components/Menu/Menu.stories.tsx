import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./Menu";
import { mockMenuProps } from "./Menu.mocks";
import type { MenuProps } from "./Menu.types";

export default {
  title: "components/Navbar/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockMenuProps,
} as MenuProps;
Base.storyName = "Menu";
