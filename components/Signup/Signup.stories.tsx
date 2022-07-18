import { ComponentMeta, ComponentStory } from "@storybook/react";
import Signup from "./Signup";

export default {
  title: "components/Account/Register",
  component: Signup,
  argTypes: "",
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = () => <Signup />;

export const Base = Template.bind({});
Base.storyName = "Register";
