export interface SlideshowItemType {
  img: string;
  title: string;
  description: string;
  buttons: {
    text: string;
    href: string;
  }[];
}

export const SlideshowData: SlideshowItemType[] = [
  {
    img: "/images/slideshow/slideshow-img1.webp",
    title: "highest quality. honest prices.",
    description: "handcrafted with integrity",
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
  },
  {
    img: "/images/slideshow/slideshow-img2.webp",
    title: "saddle up",
    description:
      "step into the rodeo, a western boot designed for your everyday",
    buttons: [
      {
        text: "shop women's boots",
        href: "/",
      },
    ],
  },
  {
    img: "/images/slideshow/slideshow-img3.webp",
    title: "the premier low top",
    description:
      "the essential leather sneaker, now available in men's and women's",
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
  },
];
