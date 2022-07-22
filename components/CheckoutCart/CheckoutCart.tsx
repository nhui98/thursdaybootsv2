import { useAppState } from "../../context/appContext";
import s from "./CheckoutCart.module.scss";

export default function CheckoutCart() {
  const { state } = useAppState();
  const { basket } = state;
  const { products, totalProductPrice } = basket;

  return (
    <div className={s.checkoutCart}>
      <div className={s.basketItems}>
        {products.length > 0 ? (
          products.map((item) => (
            <CheckoutCartProduct {...item} key={`${item.slug} ${item.size}`} />
          ))
        ) : (
          <span>No items in basket.</span>
        )}
      </div>
      <div className={s.totals}>
        <div className={s.subtotal}>
          <span>Subtotal</span>
          <span>${totalProductPrice}</span>
        </div>
        <div className={s.shipping}>
          <span>Shipping + Duty</span>
          <span className={s.message}>Calculated at next step</span>
        </div>
        <div className={s.total}>
          <span>Total</span>
          <div className={s.wrapper}>
            <div className={s.currency}>USD</div>
            <div className={s.price}>${totalProductPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CheckoutCardProductProps {
  image: string;
  style: string;
  color: string;
  price: number;
  quantity: number;
  size: string;
  slug: string;
}

const CheckoutCartProduct = ({
  image,
  style,
  color,
  price,
  quantity,
  size,
  slug,
}: CheckoutCardProductProps) => (
  <div className={s.card}>
    <div className={s.image}>
      <img src={image} alt={slug} />
      <span className={s.quantity}>{quantity}</span>
    </div>
    <div className={s.details}>
      <div className={s.left}>
        <div className={s.title}>
          {style} | {color}
        </div>
        <div className={s.size}>Size: {size}</div>
      </div>
      <div className={s.right}>
        <div className={s.price}>${price}</div>
      </div>
    </div>
  </div>
);
