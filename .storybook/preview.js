// import { addDecorator } from "@storybook/react";
// import * as NextImage from "next/image";
import { BasketProvider } from "../context/basket-context";
import "../styles/index.scss";

const BREAKPOINTS_INT = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1280,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};

// add global decorators
export const decorators = [
  (story) => <BasketProvider>{story()}</BasketProvider>,
];
