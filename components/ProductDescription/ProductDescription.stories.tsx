import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductDescription, {
  ProductDescriptionProps,
} from "./ProductDescription";
import { MockProductDescriptionProps } from "./ProductDescription.mock";

export default {
  title: "components/ProductDetails/ProductDescription",
  component: ProductDescription,
  argTypes: {},
} as ComponentMeta<typeof ProductDescription>;

const Template: ComponentStory<typeof ProductDescription> = (args) => (
  <ProductDescription {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...MockProductDescriptionProps,
} as ProductDescriptionProps;
Base.storyName = "ProductDescription";
