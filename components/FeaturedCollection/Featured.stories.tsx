import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeaturedCollection from "./FeaturedCollection";

export default {
  title: "components/Homepage/FeaturedCollection",
  component: FeaturedCollection,
  argTypes: {},
} as ComponentMeta<typeof FeaturedCollection>;

const Template: ComponentStory<typeof FeaturedCollection> = () => (
  <FeaturedCollection />
);

export const Base = Template.bind({});
Base.storyName = "FeaturedCollection";
