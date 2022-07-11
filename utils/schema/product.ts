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
    slug: String!
    color: String!
    images: [String!]!
    sizes: [Size!]!
    featureImage: String!
    productFeatures: [String!]!
    description: String!
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
    slug: String!
    color: String!
    images: [String!]!
    sizes: [SizeInput!]!
    featureImage: String!
    productFeatures: [String!]!
    description: String!
  }
`;
