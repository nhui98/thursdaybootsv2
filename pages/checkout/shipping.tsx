import { NextPage } from "next";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutDelivery from "../../components/CheckoutDelivery/CheckoutDelivery";
import CheckoutLayout from "../../components/Layouts/CheckoutLayout";

const Shipping: NextPage & { checkout: boolean } = () => {
  return (
    <CheckoutLayout left={<CheckoutDelivery />} right={<CheckoutCart />} />
  );
};

Shipping.checkout = true;
export default Shipping;
