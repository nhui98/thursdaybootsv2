import { ComponentMeta } from "@storybook/react";
import Flyout from "./Flyout";

export default {
  title: "components/Navbar/Flyout",
  component: Flyout,
  decorators: [],
} as ComponentMeta<typeof Flyout>;

export const Base = () => <Flyout />;
Base.storyName = "Flyout";
