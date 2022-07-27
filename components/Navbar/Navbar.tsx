import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import { useAppState } from "../../context/appContext";
import Basket from "../Basket/Basket";
import Flyout from "../Flyout/Flyout";
import Menu from "../Menu/Menu";
import Overlay from "../Overlay/Overlay";
import { mensMenuData, womensMenuData } from "./data";
import styles from "./Navbar.module.scss";
import { NavbarLinkProps } from "./Navbar.types";

export default function Navbar({ home }: { home: boolean }) {
  const [flyoutActive, setFlyoutActive] = useState(false);
  const [basketActive, setBasketActive] = useState(false);

  const { state } = useAppState();
  const { basket } = state;
  const { products } = basket;

  return (
    <>
      <Flyout flyoutActive={flyoutActive} setFlyoutActive={setFlyoutActive} />
      <Overlay
        flyoutActive={flyoutActive}
        setFlyoutActive={setFlyoutActive}
        basketActive={basketActive}
        setBasketActive={setBasketActive}
      />

      <nav className={`${styles.navbar} ${home ? styles.home : ""}`}>
        <div className={styles.left}>
          {/* hamburger icon on small device */}
          <button
            className={styles.hamburger}
            onClick={() => setFlyoutActive(true)}
          >
            <GiHamburgerMenu />
          </button>
          {/* search icon on medium device */}
          <div className={styles.search}>
            <AiOutlineSearch />
          </div>

          {/* Dropdown menus */}
          <NavbarLink
            href={"/mens/boots/allstyles"}
            title={"MEN"}
            icon={AiOutlineDown}
          />
          <Menu {...mensMenuData} />
          <NavbarLink
            href={"/womens/boots/allstyles"}
            title={"WOMEN"}
            icon={AiOutlineDown}
          />
          <Menu {...womensMenuData} />

          <NavbarLink href={"/about"} title={"ABOUT"} />
        </div>

        <div className={styles.middle}>
          <Link href={`/`}>
            <a className={styles.logo}>Thursday Boots</a>
          </Link>
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
            <button
              className={styles.basket}
              onClick={() => setBasketActive(true)}
            >
              <BiShoppingBag />
              <span className={styles.counter}>
                {products &&
                  products.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <Basket basketActive={basketActive} setBasketActive={setBasketActive} />
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
