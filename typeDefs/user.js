import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    teams: [Team!]!
  }

  extend type Query {
    getUser(id: ID!): User!
    allUsers: [User!]!
  }

  extend type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }
`;
