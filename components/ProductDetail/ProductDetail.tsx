import { useState } from "react";
import {
  AiFillCheckCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useBasket } from "../../context/basket-context";
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
  slug: string;
  image: string;
}

export default function ProductDetail({
  style,
  price,
  color,
  sizes,
  productFeatures,
  slug,
  image,
}: ProductDetailProps) {
  const [featuresActive, setFeaturesActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { dispatch } = useBasket();

  const addToCart = () => {
    if (!selectedSize) return;
    dispatch({
      type: "ADD",
      payload: {
        style,
        price,
        slug,
        color,
        image,
        size: selectedSize,
        quantity: 1,
      },
    });
  };

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
      <button
        className={`${s.addtocart} ${!selectedSize ? s.disabled : ""}`}
        onClick={addToCart}
        disabled={!selectedSize}
      >
        Add to cart
      </button>
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
