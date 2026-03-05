import express from "express";
import "./config/dotenv.config.js";
import cors from "cors";
import path from "path";

import messageRoutes from "./routes/message.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/admin", adminRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend
app.use(express.static("public"));

// SPA fallback
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

export default app;