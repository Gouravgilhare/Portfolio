import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";

export const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL
    });

    if (existingAdmin) {
      console.log("ℹ️ Default admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    const admin = await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword
    });

    console.log("✅ Default admin created:", admin.email);

  } catch (error) {
    console.error("❌ Error creating default admin:", error.message);
  }
};