import { useState } from "react";
import { CategoryType } from "../../Navbar/data";
import CategoryList from "../CategoryList/CategoryList";
import DropdownLink from "../DropdownLink/DropdownLink";
import s from "./Accordion.module.scss";

interface DropdownLinkProps {
  category: CategoryType[];
  title: string;
}

export default function Accordion({ category, title }: DropdownLinkProps) {
  const [categoryActive, setCategoryActive] = useState<boolean>(false);

  return (
    <div className={s.accordion}>
      <DropdownLink
        title={title}
        active={categoryActive}
        setActive={setCategoryActive}
        bgWhite={true}
      />

      <CategoryList active={categoryActive} category={category} />
    </div>
  );
}
