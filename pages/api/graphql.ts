import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../graphql/models/Product";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      req,
      res,
      Product,
    };
  },
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
