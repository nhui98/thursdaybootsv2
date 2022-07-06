import Link from "next/link";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SlideshowData, SlideshowItemType } from "./data";
import s from "./Slideshow.module.scss";

export default function Slideshow() {
  const [slide, setSlide] = useState<number>(1);
  console.log(slide);

  const prevSlide = () => {
    slide > 1 ? setSlide((slide) => slide - 1) : setSlide(3);
  };

  const nextSlide = () => {
    slide < 3 ? setSlide((slide) => slide + 1) : setSlide(1);
  };

  return (
    <section className={s.slideshow}>
      <button className={s.left} onClick={prevSlide}>
        <AiOutlineLeft />
      </button>
      {SlideshowData.map(({ slideNo, title, img, description, buttons }) => (
        <SlideshowItem
          slideNo={slideNo}
          title={title}
          img={img}
          description={description}
          buttons={buttons}
          key={description}
          active={slide}
        />
      ))}
      <button className={s.right} onClick={nextSlide}>
        <AiOutlineRight />
      </button>
      <div className={s.counters}>
        <div className={`${s.counter} ${slide === 1 ? s.active : ""}`} />
        <div className={`${s.counter} ${slide === 2 ? s.active : ""}`} />
        <div className={`${s.counter} ${slide === 3 ? s.active : ""}`} />
      </div>
    </section>
  );
}

interface SlideshowItemProps extends SlideshowItemType {
  active: number;
}

const SlideshowItem = ({
  slideNo,
  title,
  img,
  description,
  buttons,
  active,
}: SlideshowItemProps) => {
  const SlideNumber = slideNo === 1 ? "one" : slideNo === 2 ? "two" : "three";

  return (
    <div className={`${s.slideitem} ${active === slideNo ? s.active : ""}`}>
      <img src={img} alt={description} className={s.slideimg} />
      <div className={`${s.details} ${s[SlideNumber]}`}>
        <h2 className={s.title}>
          {title.map(({ text }) => (
            <div key={text}>{text}</div>
          ))}
        </h2>

        <p className={s.description}>{description}</p>
        <div className={s.buttons}>
          {buttons.map(({ text, href }) => (
            <Link href={href} key={text}>
              <a className={s.button}>{text}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
