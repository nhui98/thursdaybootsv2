import { ApolloServer, gql } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

const typeDefs = gql`
  type Query {
    getTest: String!
  }
`;

const resolvers = {
  Query: {
    getTest: () => {
      return "hello";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
