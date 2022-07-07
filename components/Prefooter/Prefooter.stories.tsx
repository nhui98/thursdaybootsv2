import { ComponentMeta, ComponentStory } from "@storybook/react";
import Prefooter from "./Prefooter";

export default {
  title: "components/Homepage/Prefooter",
  component: Prefooter,
  argTypes: {},
} as ComponentMeta<typeof Prefooter>;

const Template: ComponentStory<typeof Prefooter> = () => <Prefooter />;

export const Base = Template.bind({});
Base.storyName = "Prefooter";
