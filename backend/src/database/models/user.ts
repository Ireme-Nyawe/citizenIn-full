import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  _id?: mongoose.Types.ObjectId | string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
  is2fa?: boolean;
  isActive?: boolean;
  phone?: string;
  profile?: string;
}
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      users?: IUser[];
    }
  }
}

const userSchema: Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    is2fa: {
      type: Boolean,
      default: false,
    },
    isActive: { type: Boolean, default: true },
    phone: {
      type: String,
      required: false,
    },
    profile: {
      type: String,
      default: null,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("users", userSchema);

export default User;
