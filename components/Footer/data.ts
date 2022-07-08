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
      title: "shop",
      links: [
        {
          linkText: "men's boots",
          href: "/",
        },
        {
          linkText: "women's boots",
          href: "/",
        },
        {
          linkText: "men's sneakers",
          href: "/",
        },
        {
          linkText: "men's shoes",
          href: "/",
        },
        {
          linkText: "accessories",
          href: "/",
        },
      ],
    },
    {
      title: "about",
      links: [
        {
          linkText: "our story",
          href: "/",
        },
        {
          linkText: "featured press",
          href: "/",
        },
        {
          linkText: "reviews",
          href: "/",
        },
        {
          linkText: "locations",
          href: "/",
        },
        {
          linkText: "ambassadors",
          href: "/",
        },
      ],
    },
    {
      title: "support",
      links: [
        {
          linkText: "faq",
          href: "/",
        },
        {
          linkText: "shipping & returns",
          href: "/",
        },
        {
          linkText: "shoe care",
          href: "/",
        },
        {
          linkText: "terms of service",
          href: "/",
        },
        {
          linkText: "privacy policy",
          href: "/",
        },
        {
          linkText: "contact us",
          href: "/",
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
        href: "/",
      },
      {
        icon: FaFacebookSquare,
        href: "/",
      },
      {
        icon: FaTwitter,
        href: "/",
      },
      {
        icon: FaPinterestSquare,
        href: "/",
      },
      {
        icon: FaYoutube,
        href: "/",
      },
    ],
  },
};
