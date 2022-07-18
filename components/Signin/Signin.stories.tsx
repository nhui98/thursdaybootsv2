import { ComponentMeta, ComponentStory } from "@storybook/react";
import Signin from "./Signin";

export default {
  title: "components/Account/Login",
  component: Signin,
  argTypes: "",
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = () => <Signin />;

export const Base = Template.bind({});
Base.storyName = "Login";
