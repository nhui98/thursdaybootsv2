import Link from "next/link";
import type { PromotionType } from "../../Navbar/data";
import s from "./PromotionItem.module.scss";

export default function PromotionItem({
  img,
  href,
  title,
  description,
}: PromotionType) {
  return (
    <Link href={href}>
      <a className={s.item}>
        <div className={s.img}>
          <img src={img} alt={title} />
        </div>
        <div className={s.details}>
          <div className={s.title}>{title}</div>
          <div className={s.description}>{description}</div>
        </div>
      </a>
    </Link>
  );
}
