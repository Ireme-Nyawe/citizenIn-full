import Joi, { boolean } from "joi";
export const updateProfileSchema = Joi.object({
  firstName: Joi.string().max(50),
  lastName: Joi.string().max(50),
  email: Joi.string().email().max(255).required().when("userId", {
    is: Joi.exist(),
    then: Joi.forbidden(),
    otherwise: Joi.allow(),
  }),
  phone: Joi.string().max(20),
  is2fa: Joi.boolean(),
});
