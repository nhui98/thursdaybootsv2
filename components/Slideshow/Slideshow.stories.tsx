import { ComponentMeta, ComponentStory } from "@storybook/react";
import Slideshow from "./Slideshow";

export default {
  title: "components/Homepage",
  component: Slideshow,
  argTypes: {},
} as ComponentMeta<typeof Slideshow>;

const Template: ComponentStory<typeof Slideshow> = () => <Slideshow />;

export const Base = Template.bind({});
Base.storyName = "Slideshow";
