import express from "express";
import bodyValidation from "../middlewares/validationMiddleware";
import { forgotPasswordSchema, loginSchema, resetPasswordSchema, verifyOTPSchema } from "../modules/auth/validation/authValidation";
import {
  is2FAEnabled,
  isOTPValid,
  isUserExistByEmail,
  isUserExistById,
  isUserPasswordValid,
  isUserStatusValid,
} from "../middlewares/authMiddleware";
import authController from "../modules/auth/controllers/authController";

const authRouter = express.Router();
authRouter.post(
  "/login",
  bodyValidation(loginSchema),
  isUserExistByEmail,
  isUserPasswordValid,
  isUserStatusValid,
  is2FAEnabled,
  authController.userLogin
);
authRouter.post("/verify-otp",bodyValidation(verifyOTPSchema),isOTPValid,authController.userLogin)
authRouter.get("/forgot-password",bodyValidation(forgotPasswordSchema),isUserExistByEmail,authController.forgotPassword)
authRouter.post("/reset-otp-verify",bodyValidation(verifyOTPSchema),isOTPValid,authController.otpValidation)
authRouter.post("/reset-password/:id",bodyValidation(resetPasswordSchema),isUserExistById,authController.resetPassword)


export default authRouter;
