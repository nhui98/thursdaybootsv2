import { gql } from "apollo-server-micro";
import { typeDef as Product } from "./product";
import { typeDef as User } from "./user";

const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [Query, Product, User];
