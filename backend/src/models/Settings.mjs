import { Schema, model } from "mongoose";

const settingsSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
      default: "Golden Car", // Default value
    },

    supportEmail: {
      type: String,
      required: true,
      match: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, // Regex للتحقق من الإيميل
      default: "Golden_car@gmail.com", // Default value
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      default: "0123456789", // Default value
    },

    address: {
      type: String,
      default: "مصر/القاهرة/المرج القديمة/شارع محمد نجيب",
      trim: true,
    },
  },
  {
    timestamps: true, // إضافة createdAt & updatedAt تلقائيًا
  }
);

export default model("Settings", settingsSchema);
