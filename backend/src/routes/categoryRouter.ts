import express from "express"
import bodyValidation from "../middlewares/validationMiddleware";
import { categorySchema } from "../modules/category/validation/categoryValidation";
import { isUserAuthorized } from "../middlewares/userAuthorization";
import { isAnyCategoryExist, isCategoryExistById, isCategoryExistByName } from "../middlewares/categoryMiddleware";
import categoryController from "../modules/category/controllers/categoryController";
const categoryRouter = express.Router();
categoryRouter.post("/",isUserAuthorized(["admin"]),bodyValidation(categorySchema),isCategoryExistByName,categoryController.createCategory)
categoryRouter.get("/:id",isUserAuthorized(["All"]),isCategoryExistById,categoryController.findCategoryById)
categoryRouter.get("/",isUserAuthorized(["All"]),isAnyCategoryExist,categoryController.findAllCategories)
categoryRouter.put("/:id",isUserAuthorized(["admin"]),bodyValidation(categorySchema),isCategoryExistById,categoryController.updateCategory)
categoryRouter.delete("/:id",isUserAuthorized(["admin"]),isCategoryExistById,categoryController.deleteCategory)
export default categoryRouter;