import Joi from "joi";

const validateBooking = Joi.object({
  user: Joi.string().hex().length(24).required(), // ObjectId
  car: Joi.string().hex().length(24).required(), // ObjectId

  startDate: Joi.date().required(),
  endDate: Joi.date().min(Joi.ref("startDate")).required(),

  totalPrice: Joi.number().positive().required(),

  status: Joi.string()
    .valid("قيد الانتظار", "تم التأكيد", "تم الإلغاء", "مكتمل")
    .default("قيد الانتظار"),
});
export default validateBooking;
