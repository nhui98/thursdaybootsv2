import { gql } from "apollo-server-micro";

export const typeDef = gql`
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  extend type Mutation {
    signUp(input: signUpInput!): signUpResponse!
    signIn(input: signInInput!): signInResponse!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String!
  }

  input signUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type signUpResponse {
    user: User
    error: Boolean
    message: String
  }

  input signInInput {
    email: String!
    password: String!
  }

  type signInResponse {
    user: User
    error: Boolean
    message: String
  }
`;
