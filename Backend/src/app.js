import express from 'express';
import './config/dotenv.config.js';
import cors from 'cors';
import messageRoutes from "./routes/message.routes.js";
import adminRoutes from "./routes/admin.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
// dotenv.config();


app.use("/api/admin", adminRoutes);
app.use("/api/messages", messageRoutes);

export default app;
