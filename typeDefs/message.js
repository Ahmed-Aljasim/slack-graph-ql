import { gql } from 'apollo-server-express';

export default gql`
  type Message {
    id: ID!
    text: String!
    user: User!
    channel: Channel!
  }

  extend type Mutation {
    createMessage(channelId: ID!, text: String!): Boolean!
  }
`;
