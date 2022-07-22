import { ReactElement } from "react";
import CheckoutTitle from "../CheckoutTitle/CheckoutTitle";
import s from "./CheckoutLayout.module.scss";

interface CheckoutLayoutProps {
  left: ReactElement;
  right: ReactElement;
}

export default function CheckoutLayout({ left, right }: CheckoutLayoutProps) {
  return (
    <div>
      <div className={s.checkout}>
        <div className={s.left}>
          <div className={s.title}>
            <CheckoutTitle />
          </div>

          <div className={s.container}>
            <div className={s.cartSmall}>{right}</div>
          </div>

          <div className={s.form}>{left}</div>
        </div>

        <div className={s.right}>
          <div className={s.cart}>{right}</div>
        </div>
      </div>
    </div>
  );
}
