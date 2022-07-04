import Link from "next/link";
import { CategoryType, StyleType } from "../../Navbar/data";
import s from "./StyleList.module.scss";

export default function StyleList({ styles, title }: CategoryType) {
  return (
    <ul className={s.list} key={title}>
      <li className={s.title}>{title}</li>
      {styles.map(({ href, style }) => (
        <StyleItem href={href} style={style} key={style} />
      ))}
    </ul>
  );
}

const StyleItem = ({ href, style }: StyleType) => (
  <li key={style}>
    <Link href={href}>
      <a className={s.listItem}>{style}</a>
    </Link>
  </li>
);
