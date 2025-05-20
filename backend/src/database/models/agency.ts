import mongoose, { Schema } from "mongoose";

export interface IAgency extends Document {
  _id?: mongoose.Types.ObjectId | string;
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
}
declare global {
    namespace Express {
      interface Request {
        agency?: IAgency;
        agencies?: IAgency[]
      }
    }
  }

const agencySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const Agency = mongoose.model<IAgency>("agencies", agencySchema);

export default Agency;
