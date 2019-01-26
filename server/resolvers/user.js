import { User } from '../models';

export default {
  Query: {
    getUser: (root, { id }) => User.findById(id),
    allUsers: () => User.find({})
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = await User.create(args);

      return user;
    }
  }
};
