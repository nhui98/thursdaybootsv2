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
          href: "/mens/boots/chelsea",
          src: "/images/flyout/flyout-men-chelsea.webp",
        },
        {
          style: "chukka",
          href: "/mens/boots/chukka",
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
          href: "/mens/shoes/dress",
          src: "/images/flyout/flyout-men-dress.webp",
        },
        {
          style: "loafers",
          href: "/mens/shoes/loafers",
          src: "/images/flyout/flyout-men-loafer.webp",
        },
        {
          style: "boat shoes",
          href: "/mens/shoes/boats",
        },
      ],
    },
    {
      title: "accessories & apparel",
      styles: [
        {
          style: "shoe care",
          href: "/unisex/accessories/care",
          src: "/images/flyout/flyout-uni-care.webp",
        },
        {
          style: "laces",
          href: "/unisex/accessories/laces",
        },
        {
          style: "socks",
          href: "/unisex/accessories/socks",
          src: "/images/flyout/flyout-uni-socks.webp",
        },
        {
          style: "belts",
          href: "/unisex/accessories/belts",
          src: "/images/flyout/flyout-uni-belts.webp",
        },
        {
          style: "jackets",
          href: "/unisex/accessories/jackets",
          src: "/images/flyout/flyout-uni-jacket.webp",
        },
      ],
    },
  ],
  promotions: [
    {
      img: "/images/menu/men-promoimg-1.webp",
      href: "/",
      title: "rugged & resilient",
      description: "thoughtfully handcrafted to go the extra mile",
    },
    {
      img: "/images/menu/men-promoimg-2.webp",
      href: "/",
      title: "year-round essentials",
      description: "meet the premier low top, your new go-to leather sneaker",
    },
    {
      img: "/images/menu/men-promoimg-3.webp",
      href: "/",
      title: "dress to impress",
      description: "the saint in hickory hand-finished full-grain leather",
    },
    {
      img: "/images/menu/men-promoimg-4.webp",
      href: "/",
      title: "leather belts",
      description: "the perfect finishing touch",
    },
    {
      img: "/images/menu/men-promoimg-5.webp",
      href: "/",
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
    {
      title: "accessories & apparel",
      styles: [
        {
          style: "shoe care",
          href: "/unisex/accessories/care",
          src: "/images/flyout/flyout-uni-care.webp",
        },
        {
          style: "laces",
          href: "/unisex/accessories/laces",
        },
        {
          style: "socks",
          href: "/unisex/accessories/socks",
          src: "/images/flyout/flyout-uni-socks.webp",
        },
        {
          style: "belts",
          href: "/unisex/accessories/belts",
          src: "/images/flyout/flyout-uni-belts.webp",
        },
      ],
    },
  ],
  promotions: [
    {
      img: "/images/menu/women-promoimg-1.webp",
      href: "/",
      title: "be legendary",
      description: "thoughtfully handcrafted to go the extra mile",
    },
    {
      img: "/images/menu/women-promoimg-2.webp",
      href: "/",
      title: "saddle up with the rodeo",
      description: "our latest western boot, now available in 4 colors",
    },
    {
      img: "/images/menu/women-promoimg-3.webp",
      href: "/",
      title: "the premier low top",
      description: "now available in 6 new colors",
    },
    {
      img: "/images/menu/women-promoimg-4.webp",
      href: "/",
      title: "leather belts",
      description: "the perfect finishing touch to any outfit",
    },
    {
      img: "/images/menu/women-promoimg-5.webp",
      href: "/",
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
  href: string;
  title: string;
  description: string;
}
