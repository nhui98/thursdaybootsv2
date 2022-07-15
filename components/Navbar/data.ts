export const mensMenuData: MenuDataType = {
  category: [
    {
      title: "boots",
      styles: [
        {
          style: "president",
          href: "/mens/boots/president",
          src: "/images/flyout/flyout-men-president.webp",
        },
        {
          style: "captain",
          href: "/mens/boots/captain",
          src: "/images/flyout/flyout-men-captain.webp",
        },
        {
          style: "chelsea",
          href: "/mens/boots/cavalier",
          src: "/images/flyout/flyout-men-chelsea.webp",
        },
        {
          style: "chukka",
          href: "/mens/boots/scout",
          src: "/images/flyout/flyout-men-chukka.webp",
        },
      ],
    },
    {
      title: "sneakers",
      styles: [
        {
          style: "low top",
          href: "/mens/sneakers/lowtop",
          src: "/images/flyout/flyout-men-low.webp",
        },
        {
          style: "high top",
          href: "/mens/sneakers/hightop",
          src: "/images/flyout/flyout-men-high.webp",
        },
      ],
    },
    {
      title: "shoes",
      styles: [
        {
          style: "dress shoes",
          href: "/mens/shoes/executive",
          src: "/images/flyout/flyout-men-dress.webp",
        },
        {
          style: "loafers",
          href: "/mens/shoes/loafer",
          src: "/images/flyout/flyout-men-loafer.webp",
        },
        {
          style: "boat shoes",
          href: "/mens/shoes/boat",
        },
      ],
    },
  ],
  promotions: [
    {
      img: "/images/navbar-menu/men-promoimg-1.webp",
      title: "rugged & resilient",
      description: "thoughtfully handcrafted to go the extra mile",
    },
    {
      img: "/images/navbar-menu/men-promoimg-2.webp",
      title: "year-round essentials",
      description: "meet the premier low top, your new go-to leather sneaker",
    },
    {
      img: "/images/navbar-menu/men-promoimg-3.webp",
      title: "dress to impress",
      description: "the saint in hickory hand-finished full-grain leather",
    },
    {
      img: "/images/navbar-menu/men-promoimg-4.webp",
      title: "leather belts",
      description: "the perfect finishing touch",
    },
    {
      img: "/images/navbar-menu/men-promoimg-5.webp",
      title: "so fresh & so clean",
      description: "premium shoe care for your favourite pair of boots",
    },
  ],
};

export const womensMenuData: MenuDataType = {
  category: [
    {
      title: "boots",
      styles: [
        {
          style: "chelsea",
          href: "/womens/boots/chelsea",
          src: "/images/flyout/flyout-women-chelsea.webp",
        },
        {
          style: "high heels",
          href: "/womens/boots/heel",
          src: "/images/flyout/flyout-women-heels.webp",
        },
        {
          style: "captain",
          href: "/womens/boots/captain",
          src: "/images/flyout/flyout-women-captain.webp",
        },
      ],
    },
    {
      title: "sneakers",
      styles: [
        {
          style: "classic low top",
          href: "/womens/sneakers/low",
          src: "/images/flyout/flyout-men-low.webp",
        },
        {
          style: "classic high top",
          href: "/womens/sneakers/high",
          src: "/images/flyout/flyout-men-high.webp",
        },
      ],
    },
  ],
  promotions: [
    {
      img: "/images/navbar-menu/women-promoimg-1.webp",
      title: "be legendary",
      description: "thoughtfully handcrafted to go the extra mile",
    },
    {
      img: "/images/navbar-menu/women-promoimg-2.webp",
      title: "saddle up with the rodeo",
      description: "our latest western boot, now available in 4 colors",
    },
    {
      img: "/images/navbar-menu/women-promoimg-3.webp",
      title: "the premier low top",
      description: "now available in 6 new colors",
    },
    {
      img: "/images/navbar-menu/women-promoimg-4.webp",
      title: "leather belts",
      description: "the perfect finishing touch to any outfit",
    },
    {
      img: "/images/navbar-menu/women-promoimg-5.webp",
      title: "so fresh & so clean",
      description: "premium shoe care for your favourite pair of boots",
    },
  ],
};

export interface MenuDataType {
  category: CategoryType[];
  promotions: PromotionType[];
}

export interface CategoryType {
  title: string;
  styles: StyleType[];
}

export interface StyleType {
  style: string;
  href: string;
  src?: string;
}

export interface PromotionType {
  img: string;
  title: string;
  description: string;
}
