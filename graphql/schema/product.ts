import { gql } from "apollo-server-micro";
import dbConnect from "../../utils/dbConnect";

export const typeDef = gql`
  extend type Query {
    getProducts: [Product!]!
    getProduct(id: ID!): Product
  }

  extend type Mutation {
    createProduct(input: createProductInput!): Product
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
    getProducts: async (parent, args, { Product }) => {
      await dbConnect();
      return await Product.find();
    },
    // @ts-ignore
    getProduct: async (parent, { id }, { Product }) => {
      await dbConnect;
      return await Product.findById(id);
    },
  },
  Mutation: {
    // @ts-ignore
    createProduct: async (parent, args, { Product }) => {
      await dbConnect;
      const newProduct = new Product(args.input);
      return await newProduct.save();
    },
  },
};
