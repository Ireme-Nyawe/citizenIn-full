import mongoose, { Schema } from "mongoose";
export interface ICategory extends Document {
  _id?: mongoose.Types.ObjectId | string;
  name: string;
  description?: string;
}
declare global {
    namespace Express {
      interface Request {
        category?: ICategory;
        categories?: ICategory[]
      }
    }
  }
const categorySchema: Schema = new Schema(
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
  },
  { timestamps: true }
);

const Category = mongoose.model<ICategory>("categories", categorySchema);

export default Category;
