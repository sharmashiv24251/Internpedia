import React, { useState } from "react";

type ConsoleProps = {
  addTask: (name: string) => void;
};

const Console: React.FC<ConsoleProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600 transition-colors duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default Console;
