import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" }); // points to root .env

const router = express.Router();

// 1. Create transporter ONCE outside the route for better performance
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an "App Password," not your main password
  },
});

// Verify connection configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Nodemailer config error:", error);
  } else {
    console.log("📧 Server is ready to take our messages");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // 2. Enhanced Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Basic Email Regex Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // 3. Send the Mail
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `💼 New Portfolio Message from ${name.trim()}`,
      // Use text fallback for non-HTML mail clients
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, "<br/>")} 
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent! I'll get back to you soon.",
    });
  } catch (error) {
    // Pass the error to your global error handler
    next(error);
  }
});

export default router;
