import { ErrorMessage, Field } from "formik";
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
  options: {
    key: string;
    value: string;
    price: number | string;
  }[];
}

export const RadioInput = ({ name, options, ...rest }: RadioInputProps) => (
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
            />
            <label htmlFor={value}>{key}</label>
            <div className={s.price}>
              {typeof price === "string" ? "" : "$"}
              {price}
            </div>
          </div>
        ));
      }}
    </Field>
  </div>
);
