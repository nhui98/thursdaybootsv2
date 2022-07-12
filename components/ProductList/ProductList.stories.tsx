import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductList, { ProductListProps } from "./ProductList";
import { MockProductListProps } from "./ProductList.mock";

export default {
  title: "components/ProductListing/ProductList",
  component: ProductList,
  argTypes: {},
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...MockProductListProps,
} as ProductListProps;
Base.storyName = "ProductList";
