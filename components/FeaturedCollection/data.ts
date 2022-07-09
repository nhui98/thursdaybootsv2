export interface collectionType {
  id: number;
  href: string;
  img: string;
  altImg: string;
  style: string;
  color: string;
  price: number;
}

interface featuredCollectionType {
  mens: {
    buttonText: string;
    collection: collectionType[];
  };
  womens: {
    buttonText: string;
    collection: collectionType[];
  };
}

export const featuredCollectionData: featuredCollectionType = {
  mens: {
    buttonText: "MEN'S BOOTS",
    collection: [
      {
        id: 1,
        href: "/",
        img: "/images/collection/collection-mens-1.webp",
        altImg: "/images/collection/collection-mens-1-alt.webp",
        style: "Captain",
        color: "Black Matte",
        price: 199,
      },
      {
        id: 2,
        href: "/",
        img: "/images/collection/collection-mens-2.webp",
        altImg: "/images/collection/collection-mens-2-alt.webp",
        style: "Cavalier",
        color: "Sandstone",
        price: 190,
      },
      {
        id: 3,
        href: "/",
        img: "/images/collection/collection-mens-3.webp",
        altImg: "/images/collection/collection-mens-3-alt.webp",
        style: "Cadet",
        color: "Walnut",
        price: 190,
      },
      {
        id: 4,
        href: "/",
        img: "/images/collection/collection-mens-4.webp",
        altImg: "/images/collection/collection-mens-4-alt.webp",
        style: "Wingtip",
        color: "Burgandy",
        price: 235,
      },
    ],
  },
  womens: {
    buttonText: "WOMEN'S BOOTS",
    collection: [
      {
        id: 1,
        href: "/",
        img: "/images/collection/collection-womens-1.webp",
        altImg: "/images/collection/collection-womens-1-alt.webp",
        style: "Legend",
        color: "Black Matte",
        price: 160,
      },
      {
        id: 2,
        href: "/",
        img: "/images/collection/collection-womens-2.webp",
        altImg: "/images/collection/collection-womens-2-alt.webp",
        style: "Knockout",
        color: "Black Matte",
        price: 168,
      },
      {
        id: 3,
        href: "/",
        img: "/images/collection/collection-womens-3.webp",
        altImg: "/images/collection/collection-womens-3-alt.webp",
        style: "Captain",
        color: "Black Matte",
        price: 190,
      },
      {
        id: 4,
        href: "/",
        img: "/images/collection/collection-womens-4.webp",
        altImg: "/images/collection/collection-womens-4-alt.webp",
        style: "Combat",
        color: "Black",
        price: 180,
      },
    ],
  },
};
