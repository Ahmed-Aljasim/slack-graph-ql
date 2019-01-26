import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import keys from './config/keys';

const { mongoUser, mongoPass, port } = keys;

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-ca68v.mongodb.net/test?retryWrites=true`,
      { useNewUrlParser: true, useCreateIndex: true }
    );

    const app = express();

    app.disable('x-powered-by');

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: true,
      context: ({ req, res }) => ({ req, res })
    });

    server.applyMiddleware({ app, cors: true });

    app.listen({ port }, () =>
      console.log(`http://localhost:${port}${server.graphqlPath}`)
    );
  } catch (err) {
    console.error(err);
  }
})();
