import express, { urlencoded } from 'express';
import dotenv from 'dotenv'
import dbConnection from './Database/dbConnection.js';
import cors from 'cors'
import taskRouter from './routes/taskRoutes.js';



dotenv.config();
const app = express();

app.use(express.json())
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
  })
)

app.use('/api/v1/task', taskRouter);



dbConnection();

export default app;