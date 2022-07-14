import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MockProductImagesProps } from "./data";
import ProductImages, { ProductImagesProps } from "./ProductImages";

export default {
  title: "components/ProductDetails/ProductImages",
  component: ProductImages,
  argTypes: {},
} as ComponentMeta<typeof ProductImages>;

const Template: ComponentStory<typeof ProductImages> = (args) => (
  <ProductImages {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...MockProductImagesProps,
} as ProductImagesProps;
Base.storyName = "ProductImages";
