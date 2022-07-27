import { NextPage } from "next";
import CheckoutDelivery from "../../components/CheckoutDelivery/CheckoutDelivery";

const Shipping: NextPage & { checkout: boolean } = () => {
  return <CheckoutDelivery />;
};

Shipping.checkout = true;
export default Shipping;
