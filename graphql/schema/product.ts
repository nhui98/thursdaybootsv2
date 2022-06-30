import { gql } from "apollo-server-micro";
import dbConnect from "../../utils/dbConnect";

export const typeDef = gql`
  type Size {
    size: String!
    stock: Int!
  }

  type Product {
    id: ID!
    gender: String!
    style: String!
    price: Float!
    color: String!
    mainImg: String!
    altImg: [String]!
    sizes: [Size!]!
  }

  extend type Query {
    getProducts: [Product!]!
    getProduct(id: ID!): Product
  }
`;

export const resolvers = {
  Query: {
    // @ts-ignore
    getProducts: async (_, __, { Product }) => {
      await dbConnect();
      return await Product.find();
    },
    // @ts-ignore
    getProduct: async (_, { id }, { Product }) => {
      await dbConnect;
      return await Product.findById(id);
    },
  },
};
