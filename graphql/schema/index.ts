import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-micro";
import { merge } from "lodash";

import { resolvers as productResolvers, typeDef as Product } from "./product";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Product],
  resolvers: merge(resolvers, productResolvers),
});
