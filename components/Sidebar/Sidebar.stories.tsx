import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { MockSidebarProps } from "./Sidebar.mock";

export default {
  title: "components/ProductListing/Sidebar",
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...MockSidebarProps,
} as SidebarProps;
Base.storyName = "Sidebar";
