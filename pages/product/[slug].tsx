import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ProductImages from "../../components/ProductImages/ProductImages";
import s from "../../styles/pages/productDetails.module.scss";
import dbConnect from "../../utils/dbConnect";
import Product, { ProductType } from "../../utils/models/Product";

const ProductDetails: NextPage = ({ product }: any) => {
  const {
    images,
    slug,
    style,
    price,
    color,
    sizes,
    productFeatures,
    featureImage,
    description,
  } = JSON.parse(product) as ProductType;

  return (
    <div className={s.productDetails}>
      <section className={s.container}>
        <ProductImages images={images} slug={slug} />
        <ProductDetail
          style={style}
          price={price}
          color={color}
          sizes={sizes}
          productFeatures={productFeatures}
          slug={slug}
          image={images[0]}
        />
      </section>

      <ProductDescription
        style={style}
        featureImage={featureImage}
        description={description}
        slug={slug}
      />

      {/* <section className={s.reviews}>reviews</section> */}
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();
  const products = await Product.find().select("slug");
  const paths = products.map((p) => {
    return {
      params: { slug: p.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect();

  if (!params?.slug || Array.isArray(params?.slug))
    throw new Error("bad parameters");

  const product = await Product.findOne({ slug: params.slug });

  return {
    props: {
      product: JSON.stringify(product),
    },
  };
};
