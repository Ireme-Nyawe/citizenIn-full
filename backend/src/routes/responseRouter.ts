import express from "express"
import { isUserAuthorized } from "../middlewares/userAuthorization"
import bodyValidation from "../middlewares/validationMiddleware"
import { responseSchema } from "../modules/response/validation/responseValidation"
import { isAnyResponseExist, isAnyResponseExistComplaint, isResponseExistByName } from "../middlewares/responseMidlleware"
import responderController from "../modules/response/controllers/responderController"
const responseRouter = express.Router()
responseRouter.post("/",isUserAuthorized(["agency"]),bodyValidation(responseSchema),isResponseExistByName,responderController.createResponse)
responseRouter.get("/complaint/:complaintId",isUserAuthorized(["agency","citizen"]),isAnyResponseExistComplaint,responderController.findAllResponse)
responseRouter.get("/complaint",isUserAuthorized(["admin"]),isAnyResponseExist,responderController.findAllResponse)
export default responseRouter