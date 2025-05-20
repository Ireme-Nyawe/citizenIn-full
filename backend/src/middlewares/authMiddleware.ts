import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import authRepository from "../modules/auth/repositories/authRepository";
import { comparePassword, generateOTP } from "../helpers/auth";
import { sendEmail } from "../services/emailservice";

export const isUserExistByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  try {
    const user = await authRepository.findUserByAttribute(email);

    if (!user) {
      res.status(httpStatus.UNAUTHORIZED).json({
        status: httpStatus.UNAUTHORIZED,
        message: "User not found",
      });
      return;
    }

    req.user = user;
    return next();
  } catch (error: any) {
    return next(error);
  }
};

export const isUserPasswordValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { password } = req.body;
  const isPasswordMatch = await comparePassword(password, req?.user?.password);

  try {
    if (!isPasswordMatch) {
      res.status(httpStatus.UNAUTHORIZED).json({
        status: httpStatus.UNAUTHORIZED,
        message: "Incorrect Password",
      });
      return;
    }
    next();
  } catch (error: any) {
    return next(error);
  }
};

export const isUserStatusValid = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!(req.user ? req.user.isActive : false)) {
        res.status(httpStatus.UNAUTHORIZED).json({
          status: httpStatus.UNAUTHORIZED,
          message: "User is disabled for access, contact system admin for support!",
        });
        return;
      }
      next();
    } catch (error: any) {
      return next(error)
    }
  };

  export const is2FAEnabled = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (req.user?.is2fa) {
        const otp = generateOTP()
  
        await sendEmail(String(req?.user?.email), "OTP Verification", "OTP Verification", `Your OTP is <b>${otp}</b>. This OTP will expire in 1 hour.`);
  
        const session = await authRepository.saveSession(String(req?.user?._id),otp);
        
        res.status(httpStatus.OK).json({
          status: httpStatus.OK,
          message: "OTP sent successfully",
          data: { session },
        });
        return;
      }
      return next();
    } catch (error) {
      return next(error)
    }
  }
  