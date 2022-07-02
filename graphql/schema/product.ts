import { gql } from "apollo-server-micro";

export const typeDef = gql`
  extend type Query {
    getProduct(id: ID!): Product
    getProducts: [Product!]!
    getFilteredProducts(
      gender: String!
      category: String
      style: String
    ): [Product]
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
