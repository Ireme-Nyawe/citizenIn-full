import express from "express";
import bodyValidation from "../middlewares/validationMiddleware";
import { loginSchema, verifyOTPSchema } from "../modules/auth/validation/authValidation";
import {
  is2FAEnabled,
  isOTPValid,
  isUserExistByEmail,
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

export default authRouter;
