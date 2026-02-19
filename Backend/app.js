import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet"; // Added for security headers
import rateLimit from "express-rate-limit";
import contactRoute from "./routes/contact.js";

// import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // points to root .env

const app = express();
const PORT = process.env.PORT || 8080;

// ===============================
// MIDDLEWARE
// ===============================

// 1. Security Headers
app.use(helmet());

// 2. CORS Configuration
const corsOptions = {
  // Better to use an environment variable for the origin
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// 3. Body Parsers (with size limits to prevent large payload attacks)
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// 4. Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});
app.use("/api/", limiter); // Apply specifically to API routes

// ===============================
// ROUTES
// ===============================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoute);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ===============================
// GLOBAL ERROR HANDLER
// ===============================
app.use((err, req, res, next) => {
  // Log the stack trace only in development
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ===============================
// START SERVER
// ===============================
const server = app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`,
  );
});

// Graceful Shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
