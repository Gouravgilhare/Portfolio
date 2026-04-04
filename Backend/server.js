import './src/config/dotenv.config.js';
import app from './src/app.js';
import connectDB from "./src/config/db.config.js";
import { createDefaultAdmin } from './src/service/admin.service.js';

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();   // IMPORTANT

    try {
      await createDefaultAdmin();
    } catch (err) {
      console.warn("Admin creation skipped:", err.message);
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Server start failed:", error);
    process.exit(1);
  }
};

startServer();