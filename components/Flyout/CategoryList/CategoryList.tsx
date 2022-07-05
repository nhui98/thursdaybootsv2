import { useState } from "react";
import type { CategoryType, StyleType } from "../../Navbar/data";
import DropdownLink from "../DropdownLink/DropdownLink";
import StylesList from "../StylesList/StylesList";
import s from "./Category.module.scss";

interface CategoryListProps {
  category: CategoryType[];
  active: boolean;
}

export default function CategoryList({ category, active }: CategoryListProps) {
  return (
    <div className={`${s.categorylist} ${active ? s.active : ""}`}>
      {category.map(({ styles, title }) => (
        <ListItem styles={styles} title={title} key={title} />
      ))}
    </div>
  );
}

interface ListItemProps {
  styles: StyleType[];
  title: string;
}

const ListItem = ({ styles, title }: ListItemProps) => {
  const [styleActive, setStyleActive] = useState<boolean>(false);

  return (
    <div className={s.listitem}>
      <DropdownLink
        title={title}
        active={styleActive}
        setActive={setStyleActive}
        bgGrey={true}
      />

      <StylesList active={styleActive} styles={styles} />
    </div>
  );
};
