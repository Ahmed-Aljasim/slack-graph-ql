import { Team } from '../models';

export default {
  Mutation: {
    createTeam: async (root, args, { req }) => {
      try {
        await Team.create({ ...args, ownerId: '5c4bd5514a5a9553d80c099d' });

        return true;
      } catch (err) {
        console.log(err);

        return false;
      }
    }
  }
};
