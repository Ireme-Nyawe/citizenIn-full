import express  from "express"
import { isUserAuthorized } from "../middlewares/userAuthorization"
import bodyValidation from "../middlewares/validationMiddleware"
import { complaintSchema } from "../modules/complaint/validation/complaintValidation"
import { isAnyAgencyComplaintExist, isAnyCitizenComplaintExist, isComplaintExistById, isComplaintExistByName } from "../middlewares/complaintMiddleware"
import complaintController from "../modules/complaint/controller/complaintController"
const complaintRouter = express.Router()
complaintRouter.post("/",isUserAuthorized(["citizen"]),bodyValidation(complaintSchema),isComplaintExistByName,complaintController.createComplaint)
complaintRouter.put("/:id",isUserAuthorized(["citizen"]),bodyValidation(complaintSchema),isComplaintExistById,complaintController.updateComplaint)
complaintRouter.get("/:id",isUserAuthorized(["citizen","admin"]),isComplaintExistById,complaintController.findComplaintById)
complaintRouter.get("/citizen",isUserAuthorized(["citizen"]),isAnyCitizenComplaintExist,complaintController.findAllComplaint)
complaintRouter.get("/agency",isUserAuthorized(["agency"]),isAnyAgencyComplaintExist,complaintController.findAllComplaint)
complaintRouter.delete("/:id",isUserAuthorized(["citizen"]),isComplaintExistById,complaintController.deleteComplaint)

export default complaintRouter