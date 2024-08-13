import React, { useState } from "react";

type TaskProps = {
  id: number;
  name: string;
  status: "completed" | "not_started" | "ongoing";
  onUpdate: (
    id: number,
    newName: string,
    newStatus: TaskProps["status"]
  ) => void;
  onDismiss: (id: number) => void;
};

const Task: React.FC<TaskProps> = ({
  id,
  name,
  status,
  onUpdate,
  onDismiss,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newStatus, setNewStatus] = useState(status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(id, newName, newStatus);
    setIsEditing(false);
  };

  const statusStyles = {
    completed: "bg-green-500 text-white",
    not_started: "bg-red-500 text-white",
    ongoing: "bg-yellow-500 text-gray-800",
  };

  return (
    <div
      className={`p-4 rounded-lg flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 ${statusStyles[status]} mb-2`}
    >
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <input
            type="text"
            className="border p-2 rounded bg-white text-gray-800 w-full"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <select
            className="border p-2 rounded bg-white text-gray-800 w-full sm:w-auto"
            value={newStatus}
            onChange={(e) =>
              setNewStatus(e.target.value as TaskProps["status"])
            }
          >
            <option value="completed">Completed</option>
            <option value="not_started">Not Started</option>
            <option value="ongoing">Ongoing</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 sm:ml-2"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <div className="flex-grow">{name}</div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              className={`rounded px-4 py-2 ${
                statusStyles[status]
              } hover:${statusStyles[status].replace(
                "500",
                "600"
              )} transition-colors duration-200`}
            >
              {status === "completed"
                ? "Completed"
                : status === "not_started"
                ? "Not Started"
                : "Ongoing"}
            </button>
            <button
              className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors duration-200"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-gray-300 text-gray-800 rounded px-4 py-2 hover:bg-gray-400 transition-colors duration-200"
              onClick={() => onDismiss(id)}
            >
              Dismiss
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
