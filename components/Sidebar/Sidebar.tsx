import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { sidebarData } from "./data";
import s from "./Sidebar.module.scss";

export interface SidebarProps {
  gender: string;
  category: string;
  style: string;
}

export default function Sidebar({ gender, category, style }: SidebarProps) {
  const [active, setActive] = useState(category);

  if (gender === "mens" || gender === "womens")
    return (
      <div className={s.sidebar}>
        <div className={s.breadcrumb}>
          {gender} {category}
        </div>
        {sidebarData[gender] &&
          sidebarData[gender].map((data) => (
            <CategoryList
              {...data}
              active={active}
              setActive={setActive}
              key={data.id}
              styleQuery={style}
            />
          ))}
      </div>
    );

  return null;
}

interface CategoryListProps {
  id: number;
  category: string;
  styles: {
    id: number;
    style: string;
    href: string;
  }[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  styleQuery: string;
}

const CategoryList = ({
  category,
  styles,
  active,
  setActive,
  styleQuery,
}: CategoryListProps) => {
  return (
    <div className={s.category}>
      <button
        className={s.dropdown}
        onClick={() => setActive(category.toLowerCase())}
      >
        <span>{category}</span>
        {active === category ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <div
        className={`${s.styles} ${
          active === category.toLowerCase() ? s.active : ""
        }`}
      >
        {styles.map(({ id, href, style }) => (
          <Link href={href} key={id}>
            <a
              className={`${s.style} ${
                style.toLowerCase() === styleQuery ? s.active : ""
              }`}
            >
              {style}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
