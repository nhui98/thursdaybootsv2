import mongoose from "mongoose";
import dbConnect from "../../utils/dbConnect";

export const resolvers = {
  Query: {
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
    getProducts: async (parent, args, { Product }) => {
      try {
        await dbConnect();
        return await Product.find();
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    getFilteredProducts: async (
      parent,
      { gender, category, style },
      { Product }
    ) => {
      try {
        await dbConnect();

        const FilteredProductsByGender = await Product.find({
          gender,
        });

        if (category) {
          const FilteredProductsByGenderCategory =
            FilteredProductsByGender.filter((p) => p.category === category);

          if (style)
            return FilteredProductsByGenderCategory.filter(
              (p) => p.style === style
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
    addProducts: async (parent, { input }, { Product }) => {
      try {
        if (!(input.length > 0)) throw new Error("Empty Array");
        await dbConnect();
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
