import mongoose, { Schema } from "mongoose";

export interface IComplaint extends Document {
  _id?: mongoose.Types.ObjectId | string;
  userId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  agencyId: mongoose.Types.ObjectId;
  title: string;
  message: string;
  status?: "pending" | "in_progress" | "resolved" | "rejected";
  attachments?: string[];
}
declare global {
    namespace Express {
      interface Request {
        complaint?: IComplaint;
        complaints?: IComplaint[]
      }
    }
  }
const complaintSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "agencies",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "resolved", "rejected"],
      default: "pending",
    },
    attachments: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Complaint = mongoose.model<IComplaint>("complaints", complaintSchema);

export default Complaint;
