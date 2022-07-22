import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../../context/user-context";
import s from "./CheckoutOverview.module.scss";

export default function CheckoutOverview() {
  const { state } = useUser();
  const {
    user: { email },
    shippingAddress: { address, city, postcode, country },
  } = state;
  const router = useRouter();
  const routes = router.route.split("/checkout/");
  const route = routes[routes.length - 1];

  if (route === "cart" || route === "information") return null;

  return (
    <div className={s.overview}>
      <div className={s.contact}>
        <div className={s.details}>
          <div className={s.label}>Contact</div>
          <div>{email}</div>
        </div>
        <Link href="/checkout/information">
          <a className={s.link}>Change</a>
        </Link>
      </div>

      <div className={s.divider} />

      <div className={s.delivery}>
        <div className={s.details}>
          <div className={s.label}>Ship To</div>
          <div>
            {address}, {city}, {postcode}, {country}
          </div>
        </div>
        <Link href="/checkout/information">
          <a className={s.link}>Change</a>
        </Link>
      </div>
    </div>
  );
}
