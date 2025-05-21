import express from "express"
import bodyValidation from "../middlewares/validationMiddleware";
import { categorySchema } from "../modules/category/validation/categoryValidation";
import { isUserAuthorized } from "../middlewares/userAuthorization";
import { isCategoryExistByName } from "../middlewares/categoryMiddleware";
const categoryRouter = express.Router();
categoryRouter.post("/",isUserAuthorized(["admin"]),bodyValidation(categorySchema),isCategoryExistByName,)
export default categoryRouter;