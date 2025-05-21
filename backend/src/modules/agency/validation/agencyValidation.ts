import Joi from "joi";
export const agencySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
});
export const updateAgencySchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  address: Joi.string(),
  phone: Joi.string(),
  email: Joi.string(),
});
