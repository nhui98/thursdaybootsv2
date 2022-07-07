import Link from "next/link";
import { prefooterData } from "./data";
import s from "./Prefooter.module.scss";

export default function Prefooter() {
  return (
    <section className={s.prefooter}>
      <div className={s.container}>
        <h2 className={s.title}>{prefooterData.title}</h2>
        <p className={s.description}>{prefooterData.description}</p>
        <div className={s.buttons}>
          {prefooterData.buttons.map(({ href, text }) => (
            <Link href={href} key={text}>
              <a className={s.button}>{text}</a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
