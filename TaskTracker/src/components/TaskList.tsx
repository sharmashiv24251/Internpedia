import React from "react";
import Task from "./Task";

type TaskListProps = {
  tasks: {
    id: number;
    name: string;
    status: "completed" | "not_started" | "ongoing";
  }[];
  updateTask: (
    id: number,
    newName: string,
    newStatus: "completed" | "not_started" | "ongoing"
  ) => void;
  dismissTask: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  updateTask,
  dismissTask,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          status={task.status}
          onUpdate={updateTask}
          onDismiss={dismissTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
