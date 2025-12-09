import { required } from "joi";
import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

const bcrypt = require("bcrypt");
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    match: [
      /^[\p{Script=Arabic}a-zA-Z\s'-]+$/u,
      "يجب أن تحتوي الأسامي على أحرف فقط",
    ],
  },
  last_name: {
    type: String,
    required: true,
    match: [
      /^[\p{Script=Arabic}a-zA-Z\s'-]+$/u,
      "يجب أن تحتوي الأسامي على أحرف فقط",
    ],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
      "من فضلك أدخل بريدًا إلكترونيًا صحيحًا",
    ],
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "يجب أن تحتوي كلمة السر على  علي الأقل حرف كابيتال واحد، حرف سمول واحد، رقم واحد، رمز من هذه الرموز@?!%&*$",
    ],
  },

  phone: {
    type: String,
    required: true,
    match: [/^\+?\d{7,15}$/, "يجب إدخال رقم تليفون صالح"],
  },

  address: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid email or password");
  }
  return user;
};

userSchema.methods.generateToken = function (authOptions) {
  return jwt.sign({ id: this._id.toString() }, process.env.SECRET_KEY, {
    expiresIn: authOptions,
  });
};
const User = model("User", userSchema);

export default User;
