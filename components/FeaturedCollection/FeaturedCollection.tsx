import Link from "next/link";
import { useState } from "react";
import { collectionType, featuredCollectionData } from "./data";
import s from "./FeaturedCollection.module.scss";

const { mens, womens } = featuredCollectionData;

export default function FeaturedCollection() {
  const [active, setActive] = useState(false);

  return (
    <section className={s.collection}>
      <div className={s.buttons}>
        <button
          className={`${s.button} ${!active ? s.active : ""}`}
          onClick={() => setActive(false)}
        >
          {mens.buttonText}
        </button>
        <button
          className={`${s.button} ${active ? s.active : ""}`}
          onClick={() => setActive(true)}
        >
          {womens.buttonText}
        </button>
      </div>
      <div className={s.images}>
        <div className={`${s.container} ${!active ? s.active : ""}`}>
          {mens.collection.map((c) => (
            <CollectionItem key={c.id} {...c} />
          ))}
        </div>
        <div className={`${s.container} ${s.alt} ${active ? s.active : ""}`}>
          {womens.collection.map((c) => (
            <CollectionItem key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CollectionItem = ({
  altImg,
  color,
  href,
  img,
  price,
  style,
}: collectionType) => (
  <div className={s.item}>
    <Link href={href}>
      <a className={s.image}>
        <img className={s.main} src={img} alt={`${style} ${color}`} />
        <img className={s.alt} src={altImg} alt={`${style} ${color}`} />
      </a>
    </Link>

    <div className={s.details}>
      <Link href={href}>
        <a className={s.style}>{style}</a>
      </Link>
      <div className={s.color}>{color}</div>
      <div className={s.price}>${price}</div>
    </div>
  </div>
);
