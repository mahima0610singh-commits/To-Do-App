import React, { useContext } from 'react';
import taskcontext from '../context/notes/TaskContext.js';

export default function Todotasklist({ addTrigger, filter }) {
  const { tasks, toggleTask, deleteTask, editTask } = useContext(taskcontext);

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>

      {filteredTasks.map(task => (
        <div
          key={task.id}
          className="d-flex justify-content-between border-bottom py-2"
        >

          {/* LEFT */}
          <div className="d-flex align-items-start" style={{ flex: 1 }}>
            <input
              type="checkbox"
              className="form-check-input me-3 mt-1"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span
              style={{
                wordBreak: "break-word",
                flex: 1,
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.text}
            </span>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="d-flex align-items-center ms-3" style={{ flexShrink: 0 }}>
            <button
              className="btn btn-outline-warning btn-sm me-2"
              onClick={() => editTask(task.id)}
            >
              Edit
            </button>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}