import Joi from "joi"
export const responseSchema = Joi.object({
    message: Joi.string().required(),
    responderId: Joi.string().required(),
    complaintId: Joi.string().required(),
})

