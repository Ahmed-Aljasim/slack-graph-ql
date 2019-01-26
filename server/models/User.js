import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: String,
    teams: [
      {
        type: ObjectId,
        ref: 'Team'
      }
    ],
    channels: [
      {
        type: ObjectId,
        ref: 'Channel'
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', UserSchema);
