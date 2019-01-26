import { gql } from 'apollo-server-express';

export default gql`
  type Channel {
    id: ID!
    name: String!
    public: Channel!
    messages: [Message]!
    users: [User!]!
  }

  # extend type Query {
  #   allchannels: [Channel!]!
  # }

  extend type Mutation {
    createChannel(teamId: ID!, name: String!, public: Boolean = false): Boolean!
  }
`;
