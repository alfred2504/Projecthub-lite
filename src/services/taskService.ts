import { Task } from "@/types/task";

export const taskService = {
  async getTasks(): Promise<Task[]> {
    const raw = localStorage.getItem("ph_tasks_v1") || "[]";
    return JSON.parse(raw) as Task[];
  },
  async createTask(task: Task): Promise<Task> {
    const items = JSON.parse(localStorage.getItem("ph_tasks_v1") || "[]");
    items.push(task);
    localStorage.setItem("ph_tasks_v1", JSON.stringify(items));
    return task;
  },
  async updateTask(task: Task): Promise<Task> {
    const items = JSON.parse(localStorage.getItem("ph_tasks_v1") || "[]");
    const updated = items.map((t: Task) => (t.id === task.id ? task : t));
    localStorage.setItem("ph_tasks_v1", JSON.stringify(updated));
    return task;
  },
  async deleteTask(id: string) {
    const items = JSON.parse(localStorage.getItem("ph_tasks_v1") || "[]");
    const filtered = items.filter((t: Task) => t.id !== id);
    localStorage.setItem("ph_tasks_v1", JSON.stringify(filtered));
  }
};