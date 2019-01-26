import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      unique: true
    },
    ownerId: {
      type: ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Team', TeamSchema);
