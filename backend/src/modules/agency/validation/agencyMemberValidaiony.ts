import Joi from "joi";

export const agencyMemberSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    is2fa: Joi.boolean().required(),
    phone: Joi.string().required(),
    agencyId: Joi.string().required(),
    position:  Joi.string().required(),

})

export const updateAgencyMemberSchema = Joi.object({
    position:  Joi.string().required(),

})