import { ProductType } from "../../utils/models/Product";
import ProductCard from "../ProductCard/ProductCard";
import s from "./ProductList.module.scss";

export interface ProductListProps {
  products: ProductType[];
  style: string;
}

export default function ProductList({ products, style }: ProductListProps) {
  return (
    <div className={s.productList}>
      <h2 className={s.title}>{style}</h2>
      <div className={s.container}>
        <div className={s.wrapper}>
          {products.map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
