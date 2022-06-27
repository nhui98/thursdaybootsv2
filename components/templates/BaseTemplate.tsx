import styles from "./BaseTemplate.module.css";

export interface BaseTemplateProps {
  test?: string;
}

export default function BaseTemplate({ test }: BaseTemplateProps) {
  return <div className={styles.component}>Hi Mom {test}</div>;
}
