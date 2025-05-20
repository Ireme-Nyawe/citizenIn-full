import { Request, Response } from "express";
import httpStatus from "http-status";
import { generateToken } from "../../../helpers/auth";
import authRepository from "../repositories/authRepository";

const userLogin = async (req: Request, res: Response) => {
    try {
      const token = await generateToken(req?.user?._id);
      const userId =String(req?.user?._id || "")
      const  content= token || "" ;
  
      const session = await authRepository.saveSession(userId,content)
  
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Login successful",
        data: session,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
}
export default{userLogin}