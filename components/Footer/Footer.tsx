import Link from "next/link";
import { footerData } from "./data";
import s from "./Footer.module.scss";

const { sitemap, social } = footerData;

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.sitemap}>
        {sitemap.map(({ title, links }) => (
          <div className={s.list} key={title}>
            <div className={s.title}>{title}</div>
            {links.map(({ href, linkText }) => (
              <Link href={href} key={linkText}>
                <a className={s.link}>{linkText}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={s.socials}>
        <div className={s.title}>{social.title}</div>
        <form className={s.form}>
          <input type="email" placeholder={social.emailPlaceholder} />
          <button>{social.buttonText}</button>
        </form>
        <div className={s.socialLinks}>
          {social.socialLinks.map(({ href, icon: Icon }, i) => (
            <Link href={href} key={href + i}>
              <a className={s.link}>
                <Icon />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
