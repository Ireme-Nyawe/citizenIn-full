import express from "express"
import { isUserAuthorized } from "../middlewares/userAuthorization";
import bodyValidation from "../middlewares/validationMiddleware";
import { agencyMemberSchema, updateAgencyMemberSchema } from "../modules/agency/validation/agencyMemberValidaiony";
import { isUserExistByEmail } from "../middlewares/userMiddleware";
import agencyMemberController from "../modules/agency/controllers/agencyMemberController";
import { isAgencyMemberExistById, isAnyAgencyMemberExist, isAnyAgencyMemberExistAgency } from "../middlewares/agencyMemberMiddleware";
const memberRouter = express.Router()
memberRouter.post("/",isUserAuthorized(["admin","agency"]),bodyValidation(agencyMemberSchema),isUserExistByEmail,agencyMemberController.createAgencyMember)
memberRouter.put("/:id",isUserAuthorized(["agency"]),bodyValidation(updateAgencyMemberSchema),isAgencyMemberExistById,agencyMemberController.updateAgencyMember)
memberRouter.delete("/:id",isUserAuthorized(["agency"]),isAgencyMemberExistById,agencyMemberController.deleteAgencyMember)
memberRouter.get("/",isUserAuthorized(["admin"]),isAnyAgencyMemberExist,agencyMemberController.findAllAgencies)
memberRouter.get("/my",isUserAuthorized(["agency"]),isAnyAgencyMemberExistAgency,agencyMemberController.findAllAgencies)
export default memberRouter;