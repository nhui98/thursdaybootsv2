import { useState } from "react";
import s from "./ProductImages.module.scss";

export interface ProductImagesProps {
  images: string[];
  slug: string;
}

export default function ProductImages({ images, slug }: ProductImagesProps) {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className={s.images}>
      <div className={s.altImgs}>
        {images.map((image) => (
          <button
            className={`${s.altImg} ${image === mainImg ? s.active : ""}`}
            key={image}
            onClick={() => setMainImg(image)}
          >
            <img src={image} alt={slug} />
          </button>
        ))}
      </div>
      <div className={s.mainImg}>
        <img src={mainImg} alt={slug} />
      </div>
    </div>
  );
}
