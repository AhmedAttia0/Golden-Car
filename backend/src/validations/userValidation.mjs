import Joi from "joi";

const validateUser = Joi.object({
  first_name: Joi.string()
    .min(3)
    .max(50)
    .pattern(/^[\p{Script=Arabic}a-zA-Z\s'-]+$/u)
    .required(),
  last_name: Joi.string()
    .min(3)
    .max(50)
    .pattern(/^[\p{Script=Arabic}a-zA-Z\s'-]+$/u)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required(),
  confirm_password: Joi.string()
    .min(8)
    .max(30)
    .valid(Joi.ref("password"))
    .required()
    .message({ error: "Confirm password must match the password" }),
  address: Joi.string()
    .min(5)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s,'-]{5,100}$/)
    .required(),
  phone: Joi.string()
    .pattern(/^\+?\d{7,15}$/)
    .required(),
  role: Joi.string().default("user").valid("user", "admin"),
});
export default validateUser.with("password", "confirm_password");
