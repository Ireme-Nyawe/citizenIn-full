import express from "express"
import { isUserAuthorized } from "../middlewares/userAuthorization";
import bodyValidation from "../middlewares/validationMiddleware";
import { agencySchema, updateAgencySchema } from "../modules/agency/validation/agencyValidation";
import { isAgencyExistById, isAgencyExistByName, isAnyAgencyExist } from "../middlewares/agencyMiddleware";
import agencyController from "../modules/agency/controllers/agencyController";
const agencyRouter = express.Router();
agencyRouter.post("/",isUserAuthorized(["admin"]),bodyValidation(agencySchema),isAgencyExistByName,agencyController.createAgency)
agencyRouter.put("/:id",isUserAuthorized(["admin"]),bodyValidation(updateAgencySchema),isAgencyExistById,agencyController.updateAgency)
agencyRouter.delete("/:id",isUserAuthorized(["admin"]),isAgencyExistById,agencyController.deleteAgency)
agencyRouter.get("/:id",isUserAuthorized(["All"]),isAgencyExistById,agencyController.findAgencyById)
agencyRouter.get("/",isUserAuthorized(["All"]),isAnyAgencyExist,agencyController.findAllAgencies)

export default agencyRouter;