import {Router} from "express";
import {authenticate} from "../../middlewares/auth.middleware";
import {createTask, deleteTask, 
  getTasks, updateTask} from "../controllers/task.controller";


const router = Router();

router.post("/", authenticate, createTask);
router.get("/", authenticate, getTasks);
router.put("/:id", authenticate, updateTask);
router.delete("/:id", authenticate, deleteTask);

export default router;
