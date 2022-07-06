import { useRef, useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { testimonialData } from "./data";
import s from "./Testimonials.module.scss";

export default function Testimonials() {
  const [active, setActive] = useState<number>(1);
  const testRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (wrapperRef.current && testRef.current)
      wrapperRef.current.scrollLeft -= testRef.current.clientWidth;
    if (active > 1) setActive((active) => active - 1);
  };

  const scrollRight = () => {
    if (wrapperRef.current && testRef.current)
      wrapperRef.current.scrollLeft += testRef.current.clientWidth;
    if (active < 6) setActive((active) => active + 1);
  };

  return (
    <section className={s.testimonials}>
      <h2 className={s.title}>what people are saying</h2>

      <div className={s.container}>
        <div className={s.left}>
          <AiOutlineLeft onClick={scrollLeft} />
        </div>
        <div className={s.wrapper} ref={wrapperRef}>
          {testimonialData.map(({ id, testimony, img }) => (
            <>
              <div ref={testRef} className={s.testimony} key={id}>
                <span className={s.quote}>{testimony}</span>
                <div className={s.imgsmall}>
                  <img src={img} alt={testimony} />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={s.right}>
          <AiOutlineRight onClick={scrollRight} />
        </div>
      </div>

      <div className={s.imagescontainer}>
        <div className={s.imageswrapper}>
          {testimonialData.map(({ img, testimony, id }) => (
            <div
              className={`${s.image} ${active === id ? s.active : ""}`}
              key={id}
            >
              <img src={img} alt={testimony} />
            </div>
          ))}
        </div>
      </div>

      <div className={s.rating}>
        <div className={s.ratingtitle}>over 75,000 5-star customer reviews</div>
        <div className={s.stars}>
          {new Array(5).fill(1).map((item, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
