import { IconType } from "react-icons";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export interface footerDataType {
  sitemap: sitemapType[];
  social: socialType;
}

export interface sitemapType {
  title: string;
  links: {
    linkText: string;
    href: string;
  }[];
}

export interface socialType {
  title: string;
  emailPlaceholder: string;
  buttonText: string;
  socialLinks: {
    icon: IconType;
    href: string;
  }[];
}

export const footerData: footerDataType = {
  sitemap: [
    {
      title: "Shop",
      links: [
        {
          linkText: "Men's Boots",
          href: "/mens/boots/allstyles",
        },
        {
          linkText: "Women's Boots",
          href: "/womens/boots/allstyles",
        },
        {
          linkText: "Men's Sneakers",
          href: "/mens/sneakers/allstyles",
        },
        {
          linkText: "Women's Sneakers",
          href: "/womens/sneakers/allstyles",
        },
        {
          linkText: "Men's Shoes",
          href: "/mens/shoes/allstyles",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          linkText: "Our Story",
          href: "/about",
        },
        {
          linkText: "Reviews",
          href: "/reviews",
        },
        {
          linkText: "Locations",
          href: "/locations",
        },
        {
          linkText: "Ambassadors",
          href: "/ambassadors",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          linkText: "FAQ",
          href: "/faq",
        },
        {
          linkText: "Shipping & Returns",
          href: "/shipping",
        },
        {
          linkText: "Terms of Service",
          href: "/terms-of-service",
        },
        {
          linkText: "Privacy Policy",
          href: "/privacy-statement",
        },
        {
          linkText: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
  ],
  social: {
    title: "sign up for early access & exclusive events",
    emailPlaceholder: "email@example.com",
    buttonText: "join the team",
    socialLinks: [
      {
        icon: FaInstagram,
        href: "https://www.instagram.com/thursdayboots/",
      },
      {
        icon: FaFacebookSquare,
        href: "https://www.facebook.com/ThursdayBoots/",
      },
      {
        icon: FaTwitter,
        href: "https://twitter.com/ThursdayBootCo",
      },
      {
        icon: FaPinterestSquare,
        href: "https://www.pinterest.co.uk/thursdayboots/",
      },
      {
        icon: FaYoutube,
        href: "https://www.youtube.com/c/Thursdayboots",
      },
    ],
  },
};
