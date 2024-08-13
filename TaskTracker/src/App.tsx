import React, { useState } from "react";
import TaskList from "./components/TaskList.tsx";
import Console from "./components/Console.tsx";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<
    {
      id: number;
      name: string;
      status: "completed" | "not_started" | "ongoing";
    }[]
  >([]);

  const addTask = (name: string) => {
    setTasks([...tasks, { id: Date.now(), name, status: "not_started" }]);
  };

  const updateTask = (
    id: number,
    name: string,
    status: "completed" | "not_started" | "ongoing"
  ) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name, status } : task))
    );
  };

  const dismissTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Console addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        dismissTask={dismissTask}
      />
    </div>
  );
};

export default App;
