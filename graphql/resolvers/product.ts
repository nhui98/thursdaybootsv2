import mongoose from "mongoose";
import dbConnect from "../../utils/dbConnect";

export const resolvers = {
  Query: {
    // @ts-ignore
    getProduct: async (parent, { id }, { Product }) => {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      try {
        await dbConnect();
        return await Product.findById(id);
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    // @ts-ignore
    getProducts: async (parent, args, { Product }) => {
      try {
        await dbConnect();
        return await Product.find();
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    // @ts-ignore
    getFilteredProducts: async (
      parent: any,
      {
        gender,
        category,
        style,
      }: { gender: string; category: string; style: string },
      // @ts-ignore
      { Product }
    ) => {
      try {
        await dbConnect();

        const FilteredProductsByGender = await Product.find({
          gender,
        });

        if (category) {
          const FilteredProductsByGenderCategory =
            FilteredProductsByGender.filter(
              (p: any) => p.category === category
            );

          if (style)
            return FilteredProductsByGenderCategory.filter(
              (p: any) => p.style === style
            );

          return FilteredProductsByGenderCategory;
        }

        return FilteredProductsByGender;
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error("Something bad happened");
      }
    },
  },
  Mutation: {
    // @ts-ignore
    addProduct: async (parent, { input }, { Product }) => {
      try {
        await dbConnect();
        const newProduct = new Product(input);
        return await newProduct.save();
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    // @ts-ignore
    addProducts: async (parent, { input }, { Product }) => {
      try {
        if (!(input.length > 0)) throw new Error("Empty Array");
        await dbConnect();
        // @ts-ignore
        return await input.map(async (product) => {
          const newProduct = new Product(product);
          return await newProduct.save();
        });
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
  },
};
