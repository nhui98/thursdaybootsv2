import Link from "next/link";
import { StyleType } from "../../Navbar/data";
import s from "./StylesList.module.scss";

export interface StylesListProps {
  styles: StyleType[];
  active: boolean;
}

export default function StylesList({ styles, active }: StylesListProps) {
  return (
    <div className={`${s.stylesContainer} ${active ? s.active : ""}`}>
      {styles.map(({ href, style, src }) => (
        <StylesCard href={href} style={style} src={src} key={style} />
      ))}
    </div>
  );
}

const StylesCard = ({ href, style, src }: StyleType) => {
  if (!src) return null;

  return (
    <Link href={href}>
      <a className={s.stylesCard}>
        <img src={src} alt={style} />
        <span>{style}</span>
      </a>
    </Link>
  );
};
