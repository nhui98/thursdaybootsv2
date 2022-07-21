import { NextPage } from "next";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutInfoForm from "../../components/CheckoutInfoForm/CheckoutInfoForm";
import s from "../../styles/pages/checkout-info.module.scss";

const Information: NextPage & { checkout: boolean } = () => {
  return (
    <div className={s.information}>
      <div className={s.left}>
        <div className={s.title}>
          <div className={s.logo}>thursday boots</div>
          <div className={s.breadcrumb}>
            cart &gt; information &gt; shipping &gt; payment
          </div>
        </div>

        <div className={s.container}>
          <div className={s.cartSmall}>
            <CheckoutCart />
          </div>
        </div>

        <div className={s.form}>
          <CheckoutInfoForm />
        </div>
      </div>

      <div className={s.right}>
        <div className={s.cart}>
          <CheckoutCart />
        </div>
      </div>
    </div>
  );
};

Information.checkout = true;
export default Information;
