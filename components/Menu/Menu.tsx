import Image from "next/image";
import Link from "next/link";
import styles from "./Menu.module.scss";
import type {
  MenuListProps,
  MenuProps,
  PromotionItemProps,
} from "./Menu.types";

export default function Menu({ category, promotions }: MenuProps) {
  return (
    <div className={styles.menu}>
      <div className={styles.categoryList}>
        {category.length > 0 &&
          category.map((c) => <MenuList category={c} key={c.title} />)}
      </div>

      <div className={styles.promotionsList}>
        {promotions.length > 0 &&
          promotions.map((p) => <PromotionItem promotion={p} key={p.title} />)}
      </div>
    </div>
  );
}

const MenuList = ({ category: c }: MenuListProps) => (
  <ul className={styles.listGroup} key={c.title}>
    <li className={styles.listTitle}>{c.title}</li>
    {c.styles.map((style) => (
      <li key={style.style}>
        <Link href={style.href}>
          <a className={styles.listItem}>{style.style}</a>
        </Link>
      </li>
    ))}
  </ul>
);

const PromotionItem = ({ promotion }: PromotionItemProps) => (
  <Link href={promotion.href}>
    <a className={styles.promotionItem}>
      <div className={styles.promotionImg}>
        <Image
          width={256}
          height={192}
          src={promotion.img}
          alt={promotion.title}
        />
      </div>
      <div className={styles.promotionDetail}>
        <div className={styles.promotionTitle}>{promotion.title}</div>
        <div className={styles.promotionDescription}>
          {promotion.description}
        </div>
      </div>
    </a>
  </Link>
);
