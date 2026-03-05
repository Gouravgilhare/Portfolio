import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// path to root .env
const envPath = path.resolve(__dirname, "../../../.env");

dotenv.config({ path: envPath });