import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import Flyout from "../Flyout/Flyout";
import Menu from "../Menu/Menu";
import Overlay from "../Overlay/Overlay";
import { mensMenuData, womensMenuData } from "./data";
import styles from "./Navbar.module.scss";
import { NavbarLinkProps } from "./Navbar.types";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <Flyout active={active} setActive={setActive} />
      <Overlay active={active} setActive={setActive} />
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <button className={styles.hamburger} onClick={() => setActive(true)}>
            <GiHamburgerMenu />
          </button>
          <div className={styles.search}>
            <AiOutlineSearch />
          </div>

          <NavbarLink href={"/mens"} title={"MEN"} icon={AiOutlineDown} />
          <Menu
            category={mensMenuData.category}
            promotions={mensMenuData.promotions}
          />
          <NavbarLink href={"/womens"} title={"WOMEN"} icon={AiOutlineDown} />
          <Menu
            category={womensMenuData.category}
            promotions={womensMenuData.promotions}
          />
          <NavbarLink href={"/about"} title={"ABOUT"} />
        </div>
        <div className={styles.middle}>
          <div className={styles.logo}>Thursday Boots</div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightLinks}>
            <NavbarLink href={"/help"} title={"HELP"} />
            <NavbarLink href={"/account"} title={"ACCOUNT"} />
          </div>
          <div className={styles.rightIcons}>
            <div className={styles.account}>
              <RiAccountCircleLine />
            </div>
            <div className={styles.search}>
              <AiOutlineSearch />
            </div>
            <div className={styles.basket}>
              <BiShoppingBag />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const NavbarLink = ({ href, title, icon: Icon }: NavbarLinkProps) => (
  <Link href={href}>
    <a className={styles.link}>
      <span>{title}</span>
      {Icon && (
        <span className={styles.icon}>
          <Icon />
        </span>
      )}
    </a>
  </Link>
);
