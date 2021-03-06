import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "components/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});
Base.storyName = "Navbar";
