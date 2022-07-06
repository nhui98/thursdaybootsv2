import { ComponentMeta, ComponentStory } from "@storybook/react";
import Testimonials from "./Testimonials";

export default {
  title: "components/Homepage/Testimonials",
  component: Testimonials,
  argTypes: {},
} as ComponentMeta<typeof Testimonials>;

const Template: ComponentStory<typeof Testimonials> = () => <Testimonials />;

export const Base = Template.bind({});
Base.storyName = "Testimonials";
