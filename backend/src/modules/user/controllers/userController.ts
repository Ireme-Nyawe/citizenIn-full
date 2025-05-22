import { Request, Response } from "express";
import httpStatus from "http-status";
import authRepository from "../../auth/repositories/authRepository";
import userRepository from "../repositories/userRepository";
import { hashPassword } from "../../../helpers/auth";
const userViewProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "User profile retrieved successfully",
      data: req.user,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
};

const userUpdateProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    const updatedUser = await authRepository.updateUser(
      req.user?._id,
      req.body
    );
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "User profile updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
};

const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const password = hashPassword(req.body.password);
    const userData = { ...req.body, password };
    const user = await userRepository.createUser(userData);
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "User Registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
};
export default { userViewProfile, userUpdateProfile, createUser };
