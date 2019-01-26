import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const ChannelSchema = new Schema(
  {
    name: String,
    public: Boolean,
    teamId: {
      type: ObjectId,
      ref: 'Team'
    },
    users: [
      {
        type: ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Channel', ChannelSchema);
