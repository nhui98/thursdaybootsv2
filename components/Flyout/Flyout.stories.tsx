import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flyout, { FlyoutProps } from "./Flyout";
import { MockFlyoutProps } from "./Flyout.mocks";

export default {
  title: "components/Navbar/Flyout",
  component: Flyout,
  argTypes: {},
} as ComponentMeta<typeof Flyout>;

const Template: ComponentStory<typeof Flyout> = (args) => <Flyout {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...MockFlyoutProps,
} as FlyoutProps;
Base.storyName = "Flyout";
