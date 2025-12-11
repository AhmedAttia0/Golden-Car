import { Router } from "express";
import validateToken from "../middleware/auth";
import validateRole from "../middleware/authz";
import User from "../models/User.mjs";
import userValidation from "../validations/userValidation.mjs";
import csrfDoubleSubmit from "../middleware/csrfDoubleSubmit";
const adminRouter = Router();
adminRouter.get("/users", validateToken, validateRole, async (req, res) => {
  try {
    const users = await User.find().lean();
    const sanitizedUsers = users.map((user) => {
      delete user.password;
      delete user.createdAt;
      return user;
    });
    res.status(200).json({ users: sanitizedUsers });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

adminRouter.put(
  "/users/:id/role",
  csrfDoubleSubmit,
  validateToken,
  validateRole,
  async (req, res) => {
    try {
      const { role, userId } = req.body;
      if (userId !== req.params.id) {
        return res.status(400).json({ error: "User ID mismatch" });
      }
      if (userId === req.id) {
        return res.status(400).json({ error: "Cannot change own role" });
      }
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { role },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User role updated successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

adminRouter.delete(
  "/users/:id",
  csrfDoubleSubmit,
  validateToken,
  validateRole,
  async (req, res) => {
    try {
      const userId = req.body;
      if (userId === req.id) {
        return res.status(400).json({ error: "Cannot delete own account" });
      }
      if (userId != req.params.id) {
        return res.status(400).json({ error: "User ID mismatch" });
      }
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);
adminRouter.post(
  "users/add",
  csrfDoubleSubmit,
  validateToken,
  validateRole,
  async (req, res) => {
    try {
      let user = req.body;
      const { error } = userValidation.validate(user);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const existingUser = await User.findOne({ email: user.email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }
      newUser = new User(user);
      await newUser.save();
      delete user.password;
      delete user.confirm_password;
      user.id = newUser._id.toString();
      res
        .status(201)
        .json({ message: "User created successfully", user: user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);
export default adminRouter;
