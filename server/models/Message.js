import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const MessageSchema = new Schema(
  {
    text: String,
    userId: {
      type: ObjectId,
      ref: 'User'
    },
    channelId: {
      type: ObjectId,
      ref: 'Channel'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Message', MessageSchema);
