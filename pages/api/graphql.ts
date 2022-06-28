import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer, gql } from "apollo-server-micro";
import { merge } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import {
  resolvers as productResolvers,
  typeDef as Product,
} from "../../graphql/schema/product";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Query, Product],
  resolvers: merge(resolvers, productResolvers),
});

const server = new ApolloServer({
  schema,
});

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
