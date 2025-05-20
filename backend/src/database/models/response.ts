import mongoose, { Schema } from "mongoose";

export interface IResponse extends Document {
  _id?: mongoose.Types.ObjectId | string;
  complaintId: mongoose.Types.ObjectId;
  responderId: mongoose.Types.ObjectId; // user or agency staff
  message: string;
  attachments?: string[];
}
declare global {
    namespace Express {
      interface Request {
        response?: IResponse;
        responses?: IResponse[]
      }
    }
  }
const responseSchema: Schema = new Schema(
  {
    complaintId: {
      type: Schema.Types.ObjectId,
      ref: "complaints",
      required: true,
    },
    responderId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    attachments: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Response = mongoose.model<IResponse>("responses", responseSchema);

export default Response;
