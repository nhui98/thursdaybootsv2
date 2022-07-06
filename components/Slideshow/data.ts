export interface SlideshowItemType {
  slideNo: number;
  img: string;
  title: { text: string }[];
  description: string;
  buttons: {
    text: string;
    href: string;
  }[];
}

export const SlideshowData: SlideshowItemType[] = [
  {
    slideNo: 1,
    img: "/images/slideshow/slideshow-img1.webp",
    title: [
      {
        text: "highest quality.",
      },
      {
        text: "honest prices.",
      },
    ],
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
    slideNo: 2,
    img: "/images/slideshow/slideshow-img2.webp",
    title: [{ text: "saddle up" }],
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
    slideNo: 3,
    img: "/images/slideshow/slideshow-img3.webp",
    title: [{ text: "the premier low top" }],
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
