export interface Task {
  id?: string;
  userId?: string;
  titulo: string;
  descripcion: string;
  completado: boolean;
  createdAt: Date;
}
