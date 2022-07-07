export interface prefooterType {
  title: string;
  description: string;
  buttons: {
    text: string;
    href: string;
  }[];
}

export const prefooterData: prefooterType = {
  title: "Why 'Thursday'?",
  description:
    "On Thursday we work hard, but it's also the unofficial start of the weekend, and we desing our products with that versatility in mind. Your life isn't one-dimensional. Your footwear shouldn't be either.",
  buttons: [
    {
      text: "shop men",
      href: "/",
    },
    {
      text: "shop women",
      href: "/",
    },
  ],
};
