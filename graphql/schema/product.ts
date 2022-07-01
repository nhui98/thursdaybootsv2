import { gql } from "apollo-server-micro";
import mongoose from "mongoose";
import dbConnect from "../../utils/dbConnect";

export const typeDef = gql`
  extend type Query {
    getProducts: [Product!]!
    getProduct(id: ID!): Product
  }

  extend type Mutation {
    addProduct(input: createProductInput!): Product
    addProducts(input: [createProductInput!]!): [Product]
  }

  type Size {
    size: String!
    stock: Int!
  }

  type Product {
    id: ID!
    gender: String!
    category: String!
    style: String!
    price: Float!
    color: String!
    mainImg: String!
    altImg: [String]!
    sizes: [Size!]!
  }

  input SizeInput {
    size: String!
    stock: Int!
  }

  input createProductInput {
    gender: String!
    category: String!
    style: String!
    price: Float!
    color: String!
    mainImg: String!
    altImg: [String]!
    sizes: [SizeInput!]!
  }
`;

export const resolvers = {
  Query: {
    // @ts-ignore
    getProduct: async (parent, { id }, { Product }) => {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      try {
        await dbConnect;
        return await Product.findById(id);
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
    // @ts-ignore
    getProducts: async (parent, args, { Product }) => {
      try {
        await dbConnect;
        return await Product.find();
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(`Something bad happened`);
      }
    },
  },
  Mutation: {
    // @ts-ignore
    addProduct: async (parent, { input }, { Product }) => {
      try {
        await dbConnect;
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
        await dbConnect;
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
