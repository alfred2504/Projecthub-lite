"use client";

import { useState, useEffect } from "react";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { Task } from "@/types/task";
import { v4 as uuid } from "uuid";
import { useTaskStore } from "./taskStore";

interface Props {
  editingTask?: Task | null;
  onClose: () => void;
}

const TaskForm = ({ editingTask, onClose }: Props) => {
  const addTask = useTaskStore((s) => s.addTask);
  const updateTask = useTaskStore((s) => s.updateTask);

  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(editingTask?.description || "");
  const [priority, setPriority] = useState<Task["priority"]>(editingTask?.priority || "medium");

  useEffect(() => {
    setTitle(editingTask?.title || "");
    setDescription(editingTask?.description || "");
    setPriority(editingTask?.priority || "medium");
  }, [editingTask]);

  const handleSubmit = () => {
    if (!title.trim()) return;
    const t: Task = {
      id: editingTask?.id || uuid(),
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: editingTask?.completed || false,
      createdAt: editingTask?.createdAt || new Date().toISOString()
    };
    editingTask ? updateTask(t) : addTask(t);
    onClose();
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 border rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-xl font-bold mb-4">{editingTask ? "Edit Task" : "Create Task"}</h2>
      <div className="flex flex-col gap-3">
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Select label="Priority" value={priority} onChange={(e) => setPriority(e.target.value as any)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;