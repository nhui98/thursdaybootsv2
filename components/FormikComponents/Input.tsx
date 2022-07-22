import { ErrorMessage, Field } from "formik";
import { SetStateAction } from "react";
import { DeliveryFormtype } from "../CheckoutDelivery/CheckoutDelivery";
import s from "./Input.module.scss";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input = ({ label, name, ...rest }: InputProps) => (
  <div className={s.formControl}>
    <div className={s.labelError}>
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={"div"} className={s.error} />
    </div>
    <Field id={name} name={name} {...rest} />
  </div>
);

export default Input;

interface SelectInputProps {
  label: string;
  name: string;
  options: {
    key: string;
    value: string;
  }[];
}

export const SelectInput = ({
  label,
  name,
  options,
  ...rest
}: SelectInputProps) => (
  <div className={s.formControl}>
    <div className={s.labelError}>
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={"div"} className={s.error} />
    </div>
    <Field as="select" id={name} name={name} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.key}
        </option>
      ))}
    </Field>
    <ErrorMessage name={name} component={"div"} className="error" />
  </div>
);

interface RadioInputProps {
  label: string;
  name: string;
  setValues: (
    // eslint-disable-next-line no-unused-vars
    values: SetStateAction<DeliveryFormtype>,
    // eslint-disable-next-line no-unused-vars
    shouldValidate?: boolean | undefined
  ) => void;
  values: DeliveryFormtype;
  options: {
    key: string;
    value: string;
    price: number;
  }[];
}

export const RadioInput = ({
  name,
  options,
  setValues,
  values,
  ...rest
}: RadioInputProps) => (
  <div className={s.radio}>
    <Field name={name} {...rest}>
      {({ field }: any) => {
        return options.map(({ key, price, value }) => (
          <div className={s.radioOption} key={key}>
            <input
              type="radio"
              id={value}
              {...field}
              value={value}
              checked={field.value === value}
              onClick={() => {
                setValues({ ...values, deliveryPrice: price });
              }}
            />
            <label htmlFor={value}>{key}</label>
            <div className={s.price}>{price === 0 ? "FREE" : `$${price}`}</div>
          </div>
        ));
      }}
    </Field>
  </div>
);
