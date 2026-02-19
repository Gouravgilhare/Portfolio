// Backend/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoute from "./routes/contact.js";

// ===============================
// ENVIRONMENT CONFIG
// ===============================
// Load environment variables from root .env
dotenv.config({ path: "../.env" });

// ===============================
// PATH SETUP FOR ES MODULES
// ===============================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===============================
// APP INIT
// ===============================
const app = express();
const PORT = process.env.PORT || 8080;

// ===============================
// MIDDLEWARE
// ===============================

// 1. Security Headers
app.use(helmet());

// 2. CORS
const corsOptions = {
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// 3. Body Parsers
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// 4. Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});
app.use("/api/", apiLimiter);

// ===============================
// SERVE REACT STATIC FILES
// ===============================
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

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

// ===============================
// GRACEFUL SHUTDOWN
// ===============================
process.on("SIGTERM", () => {
  console.log("SIGTERM received: closing server");
  server.close(() => {
    console.log("Server closed");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received: closing server");
  server.close(() => {
    console.log("Server closed");
  });
});
