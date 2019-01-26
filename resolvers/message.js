import { Message } from '../models';

export default {
  Mutation: {
    createMessage: async (root, args, { req }) => {
      try {
        await Message.create({ ...args, userId: '5c4bd5514a5a9553d80c099d' });

        return true;
      } catch (err) {
        console.log(err);

        return false;
      }
    }
  }
};
