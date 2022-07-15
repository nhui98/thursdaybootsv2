import type { MenuDataType } from "../Navbar/data";
import s from "./Menu.module.scss";
import PromotionItem from "./PromotionItem/PromotionItem";
import StyleList from "./StyleList/StyleList";

export default function Menu({ category, promotions }: MenuDataType) {
  return (
    <div className={s.menu}>
      <div className={s.categoryList}>
        {category.map(({ title, styles }) => (
          <StyleList styles={styles} title={title} key={title} />
        ))}
      </div>
      <div className={s.promotionsList}>
        {promotions.map(({ img, title, description }) => (
          <PromotionItem
            img={img}
            title={title}
            description={description}
            key={title}
          />
        ))}
      </div>
    </div>
  );
}
