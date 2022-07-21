import Link from "next/link";
import { useRouter } from "next/router";
import s from "./CheckoutTitle.module.scss";

export default function CheckoutTitle() {
  const router = useRouter();
  const routes = router.route.split("/checkout/");
  const route = routes[routes.length - 1];

  return (
    <div className={s.title}>
      <div className={s.logo}>thursday boots</div>
      <div className={s.breadcrumb}>
        <Link href="/checkout/cart" replace={true}>
          <a className={s.link}>Cart</a>
        </Link>
        &gt;
        {route === "shipping" || route === "payment" ? (
          <Link href="/checkout/information" replace={true}>
            <a className={s.link}>Information</a>
          </Link>
        ) : (
          <span>Information</span>
        )}
        &gt;
        {route === "payment" ? (
          <Link href="/checkout/shipping" replace={true}>
            <a className={s.link}>Shipping</a>
          </Link>
        ) : (
          <span>Shipping</span>
        )}
        &gt;
        <span>Payment</span>
      </div>
    </div>
  );
}
