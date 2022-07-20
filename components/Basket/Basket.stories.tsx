import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MockBasketProps } from "./Baseket.mock";
import Basket, { BasketProps } from "./Basket";

export default {
  title: "components/Basket/Basket",
  component: Basket,
  argTypes: {},
} as ComponentMeta<typeof Basket>;

const Template: ComponentStory<typeof Basket> = (args) => <Basket {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...MockBasketProps,
} as BasketProps;
Base.storyName = "Basket";
