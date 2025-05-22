import express from "express";
import { isUserAuthorized } from "../middlewares/userAuthorization";
import userController from "../modules/user/controllers/userController";
import bodyValidation from "../middlewares/validationMiddleware";
import { updateProfileSchema } from "../modules/user/validation/userValidation";
import { isUserExistByEmail } from "../middlewares/userMiddleware";

const userRouter = express.Router();
userRouter.get(
  "/profile",
  isUserAuthorized(["All"]),
  userController.userViewProfile
);
userRouter.put("/profile",bodyValidation(updateProfileSchema),userController.userUpdateProfile)
userRouter.post("/",isUserExistByEmail,userController.createUser)
export default userRouter;
