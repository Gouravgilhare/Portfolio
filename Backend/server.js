import "./src/config/dotenv.config.js";
import app from "./src/app.js";

const PORT = process.env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
