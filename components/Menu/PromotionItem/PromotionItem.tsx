import type { PromotionType } from "../../Navbar/data";
import s from "./PromotionItem.module.scss";

export default function PromotionItem({
  img,
  title,
  description,
}: PromotionType) {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={img} alt={title} />
      </div>
      <div className={s.details}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
}
