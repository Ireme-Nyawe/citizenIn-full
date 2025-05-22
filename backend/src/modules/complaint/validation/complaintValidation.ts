import Joi from "joi";

export const complaintSchema = Joi.object({
  userId: Joi.string().required(),          
  categoryId: Joi.string().required(),      
  agencyId: Joi.string().required(),         
  title: Joi.string().required(),
  message: Joi.string().required(),
  status: Joi.string()
    .valid("pending", "resolved", "rejected")
    .optional(),                           
});
