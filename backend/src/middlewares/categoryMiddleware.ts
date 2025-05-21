import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import categoryRepository from "../modules/category/repositories/categoryRepository";
export const isUserExistByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const category = await categoryRepository.findCategoryById(id);

    if (!category) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "Category not found",
      });
      return;
    }

    req.category = category;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isCategoryExistByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { name } = req.params;
  
    try {
      const category = await categoryRepository.findCategoryByName(name);
  
      if (category) {
        res.status(httpStatus.UNAUTHORIZED).json({
          status: httpStatus.UNAUTHORIZED,
          message: "Same Category Exist !",
        });
        return;
      }
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
  export const isAnyCategoryExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
    try {
      const category = await categoryRepository.findAllCategory();
  
      if (!category) {
        res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "Category not found",
        });
        return;
      }
  
      req.categories = category;
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
  
