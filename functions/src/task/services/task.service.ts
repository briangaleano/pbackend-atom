import {db} from "../../config/firebase";
import {Task} from "../types/task.types";

const COLLECTION = "tasks";

export const createTask = async (
  userId: string,
  data: {titulo: string; descripcion: string}
) => {
  const task: Task = {
    userId,
    titulo: data.titulo,
    descripcion: data.descripcion || "",
    completado: false,
    createdAt: new Date(),
  };

  const ref = await db.collection(COLLECTION).add(task);

  return {id: ref.id, ...task};
};

export const getTasks = async (userId: string) => {
  const snapshot = await db
    .collection(COLLECTION)
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const updateTask = async (
  userId: string,
  taskId: string,
  data: Partial<Task>
) => {
  const ref = db.collection(COLLECTION).doc(taskId);
  const snapshot = await ref.get();

  if (!snapshot.exists) {
    throw new Error("Task no encontrada");
  }

  if (snapshot.data()?.userId !== userId) {
    throw new Error("No autorizado");
  }

  await ref.update({
    ...data,
    updatedAt: new Date(),
  });

  return {id: taskId, ...snapshot.data(), ...data};
};

export const deleteTask = async (userId: string, taskId: string) => {
  const ref = db.collection(COLLECTION).doc(taskId);
  const snapshot = await ref.get();

  if (!snapshot.exists) {
    throw new Error("Task no encontrada");
  }

  if (snapshot.data()?.userId !== userId) {
    throw new Error("No autorizado");
  }

  await ref.delete();
};
