import { Channel } from '../models';

export default {
  Mutation: {
    createChannel: async (root, args) => {
      try {
        await Channel.create(args);

        return true;
      } catch (err) {
        console.log(err);

        return false;
      }
    }
  }
};
