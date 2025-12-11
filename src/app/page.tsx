"use client";

import TaskList from "@/features/tasks/TaskList";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">ProjectHub Lite</h1>
      <TaskList />
    </main>
  );
}