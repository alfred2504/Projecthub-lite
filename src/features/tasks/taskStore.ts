import create from "zustand";
import { Task } from "@/types/task";
import { getTasksFromStorage, saveTasksToStorage } from "@/utils/storage";

interface TaskState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: getTasksFromStorage(),
  setTasks: (tasks) => set(() => ({ tasks })),
  addTask: (task) => set((state) => {
    const next = [...state.tasks, task];
    saveTasksToStorage(next);
    return { tasks: next };
  }),
  updateTask: (task) => set((state) => {
    const next = state.tasks.map((t) => (t.id === task.id ? task : t));
    saveTasksToStorage(next);
    return { tasks: next };
  }),
  deleteTask: (id) => set((state) => {
    const next = state.tasks.filter((t) => t.id !== id);
    saveTasksToStorage(next);
    return { tasks: next };
  }),
  toggleComplete: (id) => set((state) => {
    const next = state.tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    saveTasksToStorage(next);
    return { tasks: next };
  })
}));