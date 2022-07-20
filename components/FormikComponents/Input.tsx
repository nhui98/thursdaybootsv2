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
    <label htmlFor={name}>{label}</label>
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
