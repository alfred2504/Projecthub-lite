"use client";

import { useState } from "react";
import { useTaskStore } from "./taskStore";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import Button from "@/components/Button";
import ThemeToggle from "@/features/tasks/ThemeToggle"; 
import { Task } from "@/types/task";

const TaskList = () => {
  const { tasks } = useTaskStore();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-3xl font-bold">ProjectHub</h1>

        <div className="flex gap-3">
          <ThemeToggle />
          <Button onClick={() => setShowForm(true)}>+ Add Task</Button>
        </div>
      </div>

      {showForm && (
        <TaskForm
          editingTask={editingTask}
          onClose={() => {
            setEditingTask(null);
            setShowForm(false);
          }}
        />
      )}

      <div className="grid gap-4 mt-6">
        {tasks.length === 0 && (
          <p className="text-gray-500 text-center">No Tasks yet. Create one!</p>
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => {
              setEditingTask(task);
              setShowForm(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;