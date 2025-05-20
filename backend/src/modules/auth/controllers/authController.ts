import { Request, Response } from "express";
import httpStatus from "http-status";
import { generateOTP, generateToken } from "../../../helpers/auth";
import authRepository from "../repositories/authRepository";
import { sendEmail } from "../../../services/emailservice";

const userLogin = async (req: Request, res: Response) => {
  try {
    const token = await generateToken(req?.user?._id);
    const userId = String(req?.user?._id || "");
    const content = token || "";

    const session = await authRepository.saveSession(userId, content);

    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Login successful",
      data: { token: token, user: req.user },
    });
  } catch (error: any) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error", error: error.message });
  }
};

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const userId = String(req?.user?._id || "");
    const OTP = await generateOTP();
    const session = await authRepository.saveSession(userId, OTP);

    const userName = req.user?.firstName || req.user?.email?.split("@")[0];

    await sendEmail(
      String(req?.user?.email),
      "Reset Password",
      "Reset Password",
      `<p> Dear ${userName}, You have requested to reset your password. Here is your OTP: <b>${OTP}</b>. 
            Please do not share it with anyone.</p>`
    );
    res.status(200).json({
      status: 200,
      message: "OTP Code sent successfully",
      session,
    });
  } catch (error: any) {
    console.error("Error in forgotPassword:", error.message);
    res.status(500).json({
      status: 500,
      message: "An error occurred while processing your request.",
      error: error.message,
    });
  }
};
const otpValidation = async (req:Request, res:Response) => {
    try {
        res.status(200).json({
            status: 200,
            message: "OTP is Valid"
        })
    } catch (error:any) {
        res.status(500).json({
            status: 500,
            message: "An error occurred while processing your request.",
            error: error.message
        });
    }
}

export default { userLogin, forgotPassword ,otpValidation};
