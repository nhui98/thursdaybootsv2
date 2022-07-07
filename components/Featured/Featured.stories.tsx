import { ComponentMeta, ComponentStory } from "@storybook/react";
import Featured from "./Featured";

export default {
  title: "components/Homepage/Featured",
  component: Featured,
  argTypes: {},
} as ComponentMeta<typeof Featured>;

const Template: ComponentStory<typeof Featured> = () => <Featured />;

export const Base = Template.bind({});
Base.storyName = "Featured";
