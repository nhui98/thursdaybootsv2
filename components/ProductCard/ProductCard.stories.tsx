import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { MockProductCardProps } from "./ProductCard.mock";

export default {
  title: "components/ProductListing/ProductCard",
  component: ProductCard,
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...MockProductCardProps,
} as ProductCardProps;
Base.storyName = "ProductCard";
