import mongoose, { Document, Schema } from "mongoose";

export interface ISession extends Document {
  userId: string;
  content: string;
}

declare global {
    namespace Express {
      interface Request {
        session?: ISession;
        sessions?: ISession[]
      }
    }
  }
const sessionSchema: Schema = new mongoose.Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
    content: {
      type: String,
      required: false,
    },
   
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model<ISession>("sessions", sessionSchema);

export default Session;
