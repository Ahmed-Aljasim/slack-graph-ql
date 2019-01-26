import { User } from '../models';
import { hash, compare } from 'bcryptjs';

export default {
  Query: {
    getUser: (root, { id }) => User.findById(id),
    allUsers: () => User.find({})
  },
  Mutation: {
    register: async (root, { password, ...otherArgs }) => {
      try {
        const hashedPassword = await hash(password, 10);
        await User.create({
          ...otherArgs,
          password: hashedPassword
        });

        return true;
      } catch (err) {
        console.log(err);

        return false;
      }
    }
  }
};
