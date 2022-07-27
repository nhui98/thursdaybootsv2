import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppState } from "../../context/appContext";
import { Dispatch } from "../../context/appTypes";
import { getStripeCheckout } from "../../lib/getStripeCheckout";
import { RadioInput } from "../FormikComponents/Input";
import s from "./CheckoutDelivery.module.scss";

const deliveryOptions = [
  { key: "Standard Delivery", value: "Standard Delivery", price: 0 },
];

export interface DeliveryFormtype {
  deliveryOption: string;
  deliveryPrice: number;
}

const initialValues: DeliveryFormtype = {
  deliveryOption: "",
  deliveryPrice: 0,
};

const validationSchema = Yup.object({
  deliveryOption: Yup.string().required("Required"),
});

const onSubmit = (
  { deliveryOption, deliveryPrice }: DeliveryFormtype,
  dispatch: Dispatch
) => {
  dispatch({
    type: "UPDATE_SHIPPING_METHOD",
    payload: {
      deliveryOption,
      deliveryPrice,
    },
  });
};

export default function CheckoutDelivery() {
  const { state, dispatch } = useAppState();
  const { basket } = state;
  const { products } = basket;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values, dispatch)}
    >
      {({ setValues, values }) => (
        <Form className={s.deliveryForm}>
          <div className={s.labelError}>
            <label htmlFor="deliveryOption">Delivery Options</label>
            <ErrorMessage
              name="deliveryOption"
              component={"div"}
              className={s.error}
            />
          </div>
          <RadioInput
            label="Delivery Options"
            name="deliveryOption"
            setValues={setValues}
            values={values}
            options={deliveryOptions}
          />
          <div className={s.footer}>
            <button
              type="submit"
              disabled={products.length === 0 ? true : false}
              className={s.nextStepBtn}
              onClick={() => getStripeCheckout(basket)}
            >
              Continue To Shipping
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
