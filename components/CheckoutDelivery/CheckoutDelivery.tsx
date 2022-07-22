import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { useBasket } from "../../context/basket-context";
import { RadioInput } from "../FormikComponents/Input";
import s from "./CheckoutDelivery.module.scss";

const deliveryOptions = [
  { key: "Standard Delivery", value: "Standard Delivery", price: "FREE" },
];

interface DeliveryFormtype {
  deliveryOption: string;
}

const initialValues: DeliveryFormtype = {
  deliveryOption: "",
};

const validationSchema = Yup.object({
  deliveryOption: Yup.string().required("Required"),
});

const onSubmit = (values: DeliveryFormtype) => {
  console.log(values);
};

export default function CheckoutDelivery() {
  const { state: basketState } = useBasket();
  const { basket } = basketState;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
          options={deliveryOptions}
        />
        <div className={s.footer}>
          <button
            type="submit"
            disabled={basket.length === 0 ? true : false}
            className={s.nextStepBtn}
          >
            Continue To Shipping
          </button>
        </div>
      </Form>
    </Formik>
  );
}
