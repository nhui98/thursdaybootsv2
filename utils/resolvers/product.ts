import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import type {
  addProductArgType,
  addProductsArgType,
  ContextType,
  getFilteredProductsArgType,
  getProductArgType,
} from "./resolver.types";

export const resolvers = {
  Query: {
    getProduct: async (
      parent: any,
      { id }: getProductArgType,
      { Product }: ContextType
    ) => {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      try {
        await dbConnect();
        return await Product.findById(id);
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    getProducts: async (parent: any, args: any, { Product }: ContextType) => {
      try {
        await dbConnect();
        return await Product.find();
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    getFilteredProducts: async (
      parent: any,
      { gender, category, style }: getFilteredProductsArgType,
      { Product }: ContextType
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
    addProduct: async (
      parent: any,
      { input }: addProductArgType,
      { Product }: ContextType
    ) => {
      try {
        await dbConnect();
        const existingProduct = await Product.findOne({ slug: input.slug });
        if (existingProduct) throw new Error("product already exists");

        const newProduct = new Product(input);
        return await newProduct.save();
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    addProducts: async (
      parent: any,
      { input }: addProductsArgType,
      { Product }: ContextType
    ) => {
      try {
        if (!(input.length > 0)) throw new Error("Empty Array");
        await dbConnect();
        return await input.map(async (product) => {
          const existingProduct = await Product.findOne({
            slug: product.slug,
          });
          if (existingProduct) throw new Error("product already exists");
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
