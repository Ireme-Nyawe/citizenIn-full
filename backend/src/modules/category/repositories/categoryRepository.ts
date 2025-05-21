import Category, { ICategory } from "../../../database/models/category";

const createCategory = async (categoryData: ICategory) => {
  return await Category.create(categoryData);
};
const findCategoryById = async (id: string) => {
  return await Category.findById(id);
};
const updateCategory = async (id: string, categoryData: ICategory) => {
  return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};
const findCategoryByName = async (name: string) => {
  return await Category.findOne({ name });
};
const findAllCategory = async () => {
  return await Category.find();
};

const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};
export default {
  createCategory,
  findAllCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  findCategoryByName,
};
