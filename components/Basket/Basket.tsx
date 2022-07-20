import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AiFillLock, AiOutlineClose } from "react-icons/ai";
import { BasketProductType, useBasket } from "../../context/basket-context";
import s from "./Basket.module.scss";

export interface BasketProps {
  basketActive: boolean;
  setBasketActive: Dispatch<SetStateAction<boolean>>;
}

export default function Basket({ basketActive, setBasketActive }: BasketProps) {
  const { state } = useBasket();
  const { basket, totalPrice } = state;

  const checkoutHandler = () => {};

  return (
    <div className={`${s.basket} ${basketActive ? s.active : ""}`}>
      <div className={s.header}>
        <h2 className={s.title}>Your Cart</h2>
        <button className={s.close} onClick={() => setBasketActive(false)}>
          <AiOutlineClose />
        </button>
      </div>

      <div className={s.basketItems}>
        {!(basket.length > 0) ? (
          <div>Basket empty</div>
        ) : (
          basket.map((item) => (
            <BasketItem {...item} key={`${item.slug}-${item.size}`} />
          ))
        )}
      </div>
      {basket.length > 0 && (
        <div className={s.footer}>
          <div className={s.shipping}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={s.subtotal}>
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <button className={s.checkoutBtn} onClick={checkoutHandler}>
            <div className={s.lock}>
              <AiFillLock />
            </div>
            <span>Checkout</span>
          </button>
        </div>
      )}
    </div>
  );
}

const BasketItem = ({
  style,
  color,
  image,
  price,
  quantity,
  size,
  slug,
}: BasketProductType) => {
  const { dispatch } = useBasket();

  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE",
      payload: {
        slug,
        size,
      },
    });
  };

  return (
    <div className={s.basketItem}>
      <Link href={`/product/${slug}`}>
        <a className={s.image}>
          <img src={image} alt={slug} />
        </a>
      </Link>
      <div className={s.details}>
        <Link href={`/product/${slug}`}>
          <a className={s.title}>
            {style} | {color}
          </a>
        </Link>
        <div className={s.size}>Size: {size}</div>
        <div className={s.quantity}>Quantity: {quantity}</div>
        <div className={s.price}>${price}</div>
        <button className={s.button} onClick={removeItemFromBasket}>
          Remove
        </button>
      </div>
    </div>
  );
};
