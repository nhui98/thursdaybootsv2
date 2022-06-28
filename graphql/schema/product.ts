import { gql } from "apollo-server-micro";
import Product from "../../graphql/models/Product";
import dbConnect from "../../utils/dbConnect";

export const typeDef = gql`
  type Size {
    size: [String!]!
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
  }
`;

export const resolvers = {
  Query: {
    getProducts: async () => {
      await dbConnect();
      return await Product.find();
    },
  },
};
