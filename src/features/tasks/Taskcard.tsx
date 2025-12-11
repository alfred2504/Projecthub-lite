"use client";

import { Task } from "@/types/task";
import Button from "@/components/Button";
import { useTaskStore } from "./taskStore";

interface Props {
  task: Task;
  onEdit: () => void;
}

const TaskCard = ({ task, onEdit }: Props) => {
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const toggleComplete = useTaskStore((s) => s.toggleComplete);

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`font-bold text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </h3>
          <p className={`text-sm text-gray-600 ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.description}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold
            ${task.priority === "high" ? "bg-red-200 text-red-700" :
              task.priority === "medium" ? "bg-yellow-200 text-yellow-700" :
                "bg-green-200 text-green-700"}`}>
            {task.priority.toUpperCase()}
          </span>

          <div className="flex gap-2">
            <Button variant="secondary" onClick={onEdit}>Edit</Button>
            <Button onClick={() => toggleComplete(task.id)}>{task.completed ? "Undo" : "Complete"}</Button>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400">Created: {new Date(task.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default TaskCard;