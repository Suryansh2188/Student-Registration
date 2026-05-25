import express from "express";
import cors from "cors";

import studentRoutes from "./routes/student.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.use(errorMiddleware);

export default app;