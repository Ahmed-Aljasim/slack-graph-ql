import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express();

app.disable("x-powered-by");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: ({ req, res }) => ({ req, res })
});

server.applyMiddleware({ app, cors: true });

app.listen({ port: 5050 }, () =>
  console.log(`http://localhost:5050${server.graphqlPath}`)
);
