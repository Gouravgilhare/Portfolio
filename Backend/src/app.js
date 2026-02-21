import express from 'express';
import './config/dotenv.config.js';
import cors from 'cors';
import emailRoutes from './routes/email.routes.js';
const app = express();
app.use(cors());
app.use(express.json());
// dotenv.config();

app.use('/api/email', emailRoutes);

export default app;
