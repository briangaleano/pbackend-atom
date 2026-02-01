import express from "express";
import cors from "cors";
import authRoutes from "./auth/routes/auth.routes";
import taskRoutes from "./task/routes/task.routes";

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

export default app;
