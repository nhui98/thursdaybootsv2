import Link from "next/link";
import { useRouter } from "next/router";
import { useAppState } from "../../context/appContext";
import s from "./CheckoutOverview.module.scss";

export default function CheckoutOverview() {
  const { state } = useAppState();
  const { user, deliveryAddress } = state;
  const { email } = user;
  const { address, city, postcode, country } = deliveryAddress;

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
