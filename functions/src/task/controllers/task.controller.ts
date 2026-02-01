
import {Response} from "express";
import * as taskService from "../services/task.service";
import {AuthRequest} from "../../middlewares/auth.middleware";


export const createTask = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({message: "Unauthorized"});
    }

    const {titulo, descripcion} = req.body;

    if (!titulo) {
      return res.status(400).json({message: "El título es requerido"});
    }

    const task = await taskService.createTask(req.user.uid, {
      titulo,
      descripcion}
    );

    return res.status(201).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Error creating task"});
  }
};

export const getTasks = async (req: AuthRequest, res: Response) => {
  const tasks = await taskService.getTasks(req.user.uid);
  res.status(200).json(tasks);
};

export const updateTask = async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const data = req.body;

  const task = await taskService.updateTask(req.user.uid, id, data);
  res.status(200).json(task);
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;

  await taskService.deleteTask(req.user.uid, id);
  res.status(204).send();
};
