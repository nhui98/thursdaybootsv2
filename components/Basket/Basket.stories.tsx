import { ComponentMeta, ComponentStory } from "@storybook/react";
import Basket from "./Basket";

export default {
  title: "components/Basket/Basket",
  component: Basket,
  argTypes: {},
} as ComponentMeta<typeof Basket>;

const Template: ComponentStory<typeof Basket> = () => <Basket />;

export const Base = Template.bind({});
Base.args = {};
Base.storyName = "Basket";
