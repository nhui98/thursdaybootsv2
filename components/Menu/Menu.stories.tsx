import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { MenuDataType } from "../Navbar/data";
import Menu from "./Menu";
import { mockMenuProps } from "./Menu.mocks";

export default {
  title: "components/Navbar/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockMenuProps,
} as MenuDataType;
Base.storyName = "Menu";
