import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductDetail, { ProductDetailProps } from "./ProductDetail";
import { MockProductDetailProps } from "./ProductDetail.mock";

export default {
  title: "components/ProductDetails/ProductDetail",
  component: ProductDetail,
  argTypes: {},
} as ComponentMeta<typeof ProductDetail>;

const Template: ComponentStory<typeof ProductDetail> = (args) => (
  <ProductDetail {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...MockProductDetailProps,
} as ProductDetailProps;
Base.storyName = "ProductDetail";
