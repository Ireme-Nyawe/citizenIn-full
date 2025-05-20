import express from "express";
import bodyValidation from "../middlewares/validationMiddleware";
import { loginSchema } from "../modules/auth/validation/authValidation";
import {
  is2FAEnabled,
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

export default authRouter;
