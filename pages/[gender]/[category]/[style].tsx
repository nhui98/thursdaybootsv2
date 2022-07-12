import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ProductList from "../../../components/ProductList/ProductList";
import Sidebar from "../../../components/Sidebar/Sidebar";
import s from "../../../styles/pages/productListing.module.scss";
import dbConnect from "../../../utils/dbConnect";
import Product from "../../../utils/models/Product";
import { paths } from "../../../utils/productListPaths";

const Mens: NextPage = ({ products }: any) => {
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

export default Mens;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  await dbConnect();

  if (!context.params) throw new Error("bad parameters");

  const products = await Product.find(context.params);

  return {
    props: {
      products: JSON.stringify(products),
    },
  };
};
