import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import authRepository from "../modules/auth/repositories/authRepository";
export const isUserExistByEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { email } = req.params;
  
    try {
      const User = await authRepository.findUserByAttribute(email);
  
      if (User) {
        res.status(httpStatus.UNAUTHORIZED).json({
          status: httpStatus.UNAUTHORIZED,
          message: "Same User/Email Exist !",
        });
        return;
      }
      return next();
    } catch (error: any) {
      return next(error);
    }
  };