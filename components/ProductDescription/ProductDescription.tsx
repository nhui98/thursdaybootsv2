import s from "./ProductDescription.module.scss";

export interface ProductDescriptionProps {
  slug: string;
  style: string;
  featureImage: string;
  description: string;
}

export default function ProductDescription({
  featureImage,
  slug,
  style,
  description,
}: ProductDescriptionProps) {
  return (
    <section className={s.description}>
      <div className={s.featureImg}>
        <img src={featureImage} alt={slug} />
      </div>
      <div className={s.wrapper}>
        <div className={s.text}>
          <h2 className={s.title}>{style}</h2>
          <span>{description}</span>
        </div>
      </div>
    </section>
  );
}
