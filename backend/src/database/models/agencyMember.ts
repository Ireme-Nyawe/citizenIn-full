import mongoose, { Schema } from "mongoose";

export interface IAgencyMember extends Document {
  _id?: mongoose.Types.ObjectId | string;
  userId: mongoose.Types.ObjectId;
  agencyId: mongoose.Types.ObjectId;
  position?: string;
  isActive?: boolean;
}
declare global {
    namespace Express {
      interface Request {
        agencyMember?: IAgencyMember;
        agencyMembers?: IAgencyMember[]
      }
    }
  }

const agencyMemberSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "agencies",
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const AgencyMember = mongoose.model<IAgencyMember>("agency_members", agencyMemberSchema);

export default AgencyMember;
