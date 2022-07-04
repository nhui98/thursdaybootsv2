export interface MenuProps {
  category: {
    title: string;
    styles: {
      style: string;
      href: string;
      src: string;
    }[];
  }[];
  promotions: {
    img: string;
    href: string;
    title: string;
    description: string;
  }[];
}

export interface MenuListProps {
  category: {
    title: string;
    styles: {
      style: string;
      href: string;
      src: string;
    }[];
  };
}

export interface PromotionItemProps {
  promotion: {
    img: string;
    href: string;
    title: string;
    description: string;
  };
}
