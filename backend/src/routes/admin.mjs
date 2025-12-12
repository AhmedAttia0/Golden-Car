import { Router } from "express";
import validateToken from "../middleware/auth.mjs";
import validateRole from "../middleware/authz.mjs";
import User from "../models/User.mjs";
import userValidation from "../validations/userValidation.mjs";
import csrfDoubleSubmit from "../middleware/csrfDoubleSubmit.mjs";
import bookingSchema from "../models/Booking.mjs";
const adminRouter = Router();
adminRouter.get("/users", async (req, res) => {
  let { page = 1, limit = 10, role, search } = req.query;

  page = Number(page);
  limit = Number(limit);
  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 1) limit = 10;
  if (limit > 100) limit = 100;

  try {
    const filters = {};

    if (role) {
      filters.role = role;
    }

    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const total = await User.countDocuments(filters);
    const total_pages = Math.ceil(total / limit);

    if (page > total_pages && total_pages > 0) {
      return res.status(404).send({ message: "Page not found" });
    }

    const skip = (page - 1) * limit;

    const users = await User.find(filters).skip(skip).limit(limit).lean();

    // هنا نستخدم Promise.all عشان ننتظر كل الـ async operations
    const sanitizedUsers = await Promise.all(
      users.map(async (user) => {
        const bookingsCount = await bookingSchema.countDocuments({
          user: user._id,
        });

        return {
          id: user._id.toString(),
          bookingsCount,
          ...user,
          password: undefined,
          __v: undefined,
          _id: undefined,
        };
      })
    );

    res.send({
      page,
      limit,
      totalUsers: total,
      totalPages: total_pages,
      users: sanitizedUsers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

adminRouter.put(
  "/users/role",
  validateToken,
  validateRole,
  async (req, res) => {
    try {
      const { role, userId } = req.body;
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
      const userId = req.params.id;
      if (userId === req.id) {
        return res.status(400).json({ error: "Cannot delete own account" });
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

adminRouter.post("/users/add", async (req, res) => {
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
    const newUser = new User(user);
    await newUser.save();
    delete user.password;
    delete user.confirm_password;
    user.id = newUser._id.toString();
    res.status(201).json({ message: "User created successfully", user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});
export default adminRouter;
