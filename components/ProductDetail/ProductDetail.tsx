import { useState } from "react";
import {
  AiFillCheckCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import s from "./ProductDetail.module.scss";

export interface ProductDetailProps {
  style: string;
  price: number;
  color: string;
  sizes: {
    size: string;
    stock: number;
  }[];
  productFeatures: string[];
}

export default function ProductDetail({
  style,
  price,
  color,
  sizes,
  productFeatures,
}: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [featuresActive, setFeaturesActive] = useState(false);

  return (
    <div className={s.details}>
      <h2 className={s.style}>{style}</h2>
      <div className={s.price}>${price}</div>
      <div className={s.guarantee}>
        <AiFillCheckCircle />
        <span>Honest Pricing Guarantee</span>
      </div>
      <div className={s.color}>Color: {color}</div>
      <div className={s.sizes}>
        {sizes.map(({ size, stock }) => (
          <button
            className={`${s.size} ${!stock ? s.disabled : ""} ${
              selectedSize === size ? s.selected : ""
            }`}
            key={size}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <button className={s.addtocart}>Add to cart</button>
      <div className={s.productFeatures}>
        <button
          className={s.title}
          onClick={() => setFeaturesActive((active) => !active)}
        >
          <span>Product Features</span>
          <div className={s.featureActive}>
            {featuresActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </button>
        <ul className={`${s.features} ${featuresActive ? s.active : ""}`}>
          {productFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
