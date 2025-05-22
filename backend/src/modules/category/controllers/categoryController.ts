import { Request, Response } from "express";
import httpStatus from "http-status";
import categoryRepository from "../repositories/categoryRepository";
const createCategory = async (req: Request, res: Response) => {
    try {
        const categoryData = req.body
      const category = await categoryRepository.createCategory(categoryData);
  
      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Category Category Added SuccessFully!",
        data:category,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findCategoryById = async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Category retrieved ",
        data:req.category,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findAllCategories= async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Categories Retrieved",
        data:req.categories,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const updateCategory= async (req: Request, res: Response) => {
    try {
        const categoryData = req.body
        const {id} = req.params;
        const category = await categoryRepository.updateCategory(id,categoryData)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Category Updated Successfully!",
        data:category,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  const deleteCategory= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const category = await categoryRepository.deleteCategory(id)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Category Updated Successfully!",
        data:category,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

export default {createCategory,findAllCategories,findCategoryById,updateCategory,deleteCategory}
  
  