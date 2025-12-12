import Joi from "joi";

const validateSettings = Joi.object({
  companyName: Joi.string().min(2).max(100).required().messages({
    "string.empty": "اسم الشركة مطلوب",
  }),
  supportEmail: Joi.string().email().required().messages({
    "string.empty": "البريد الإلكتروني للدعم مطلوب",
    "string.email": "يجب أن يكون البريد الإلكتروني صالح",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.empty": "رقم التليفون مطلوب",
      "string.pattern.base": "رقم التليفون غير صالح",
    }),
  address: Joi.string().min(5).max(200).required().messages({
    "string.empty": "العنوان مطلوب",
  }),
});

export default validateSettings;
