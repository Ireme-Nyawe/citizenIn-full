import express from "express"
import { isUserAuthorized } from "../middlewares/userAuthorization";
import bodyValidation from "../middlewares/validationMiddleware";
import { agencyMemberSchema } from "../modules/agency/validation/agencyMemberValidaiony";
import { isUserExistByEmail } from "../middlewares/userMiddleware";
import agencyMemberController from "../modules/agency/controllers/agencyMemberController";
const memberRouter = express.Router()
memberRouter.post("/",isUserAuthorized(["admin","agency"]),bodyValidation(agencyMemberSchema),isUserExistByEmail,agencyMemberController.createAgencyMember)
export default memberRouter;