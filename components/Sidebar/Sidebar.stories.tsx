import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from "./Sidebar";

export default {
  title: "components/ProductListing/Sidebar",
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Base = Template.bind({});
Base.storyName = "Sidebar";
