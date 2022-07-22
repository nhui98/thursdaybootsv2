import { ErrorMessage, Form, Formik } from "formik";
import { NextRouter, useRouter } from "next/router";
import * as Yup from "yup";
import { useAppState } from "../../context/appContext";
import { Dispatch } from "../../context/appTypes";
import { RadioInput } from "../FormikComponents/Input";
import s from "./CheckoutDelivery.module.scss";

const deliveryOptions = [
  { key: "Standard Delivery", value: "Standard Delivery", price: 0 },
  { key: "Standard Delivery2", value: "Standard Delivery2", price: 1 },
  { key: "Standard Delivery3", value: "Standard Delivery3", price: 2 },
  { key: "Standard Delivery4", value: "Standard Delivery4", price: 3 },
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
  dispatch: Dispatch,
  router: NextRouter
) => {
  dispatch({
    type: "UPDATE_SHIPPING_METHOD",
    payload: {
      deliveryOption,
      deliveryPrice,
    },
  });

  router.push("/checkout/payment");
};

export default function CheckoutDelivery() {
  const { state, dispatch } = useAppState();
  const { basket } = state;
  const { products } = basket;
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values, dispatch, router)}
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
            >
              Continue To Shipping
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
