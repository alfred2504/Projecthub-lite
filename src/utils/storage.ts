import { Task } from "@/types/task";

const KEY = "ph_tasks_v1";

export const getTasksFromStorage = (): Task[] => {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as Task[]) : [];
};

export const saveTasksToStorage = (tasks: Task[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(tasks));
};