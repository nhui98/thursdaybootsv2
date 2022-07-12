import { ProductType } from "../../utils/models/Product";
import s from "./ProductCard.module.scss";

export interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({
  product: { images, style, color, price, slug },
}: ProductCardProps) {
  return (
    <div className={s.productCard}>
      {images[0] && images[1] && (
        <div className={s.image}>
          <img className={s.mainImg} src={images[0]} alt={slug} />
          <img className={s.altImg} src={images[1]} alt={slug} />
        </div>
      )}
      <div className={s.details}>
        <div className={s.description}>
          <div className={s.style}>{style}</div>
          <div className={s.price}>${price}</div>
        </div>
        <div className={s.color}>{color}</div>
      </div>
    </div>
  );
}
