import Link from "next/link";
import { featuredData } from "./data";
import s from "./Featured.module.scss";

export default function Featured() {
  return (
    <section className={s.featured}>
      <div className={s.grid}>
        {featuredData.map(({ href, img, title }) => (
          <Link href={href} key={title}>
            <a className={s.item}>
              <img src={img} alt={title} />
              <div className={s.title}>{title}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
