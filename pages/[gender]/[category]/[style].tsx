import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ProductList from "../../../components/ProductList/ProductList";
import Sidebar from "../../../components/Sidebar/Sidebar";
import s from "../../../styles/pages/productListing.module.scss";
import dbConnect from "../../../utils/dbConnect";
import Product from "../../../utils/models/Product";
import { paths } from "../../../utils/productListPaths";

const ProductListing: NextPage = ({ products }: any) => {
  const { query } = useRouter();
  const { gender, category, style } = query;

  if (!gender || !category || !style) return null;

  return (
    <div className={s.productListing}>
      <Sidebar
        gender={gender?.toString().toLowerCase()}
        category={category?.toString().toLowerCase()}
        style={style?.toString().toLowerCase()}
      />
      <ProductList
        style={style?.toString().toLowerCase()}
        products={JSON.parse(products)}
      />
    </div>
  );
};

export default ProductListing;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect();

  //@ts-ignore
  const { gender, category, style } = params;
  let products = [] as any;

  if (style === "allstyles") {
    products = await Product.find({ gender, category });
  } else {
    products = await Product.find({ gender, category, style });
  }

  return {
    props: {
      products: JSON.stringify(products),
    },
  };
};
