import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { mensMenuData, womensMenuData } from "../Navbar/data";
import Accordion from "./Accordion/Accordion";
import s from "./Flyout.module.scss";

export interface FlyoutProps {
  flyoutActive: boolean;
  setFlyoutActive: Dispatch<SetStateAction<boolean>>;
}

export default function Flyout({ flyoutActive, setFlyoutActive }: FlyoutProps) {
  return (
    <div className={`${s.flyout} ${flyoutActive ? s.active : ""}`}>
      <div className={s.header}>
        <div className={s.search}>
          <AiOutlineSearch />
        </div>
        <button className={s.close} onClick={() => setFlyoutActive(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className={s.body}>
        <Accordion category={mensMenuData.category} title="mens" />
        <Accordion category={womensMenuData.category} title="womens" />
      </div>
      <div className={s.divider} />
      <div className={s.footer}>
        <FlyoutLink href="/about" title="about" />
        <FlyoutLink href="/help" title="help" />
        <FlyoutLink href="/account" title="account" />
      </div>
    </div>
  );
}

const FlyoutLink = ({ title, href }: { title: string; href: string }) => (
  <Link href={href}>
    <a className={s.link}>{title}</a>
  </Link>
);
