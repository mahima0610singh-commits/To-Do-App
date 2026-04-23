import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  // State
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD
  const addTask = () => {
    const text = prompt("Enter your task:");
    if (text) {
      setTasks(prev => [
        ...prev,
        { id: Date.now(), text, completed: false }
      ]);
    }
  };

  // TOGGLE
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // DELETE
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // EDIT
  const editTask = (id) => {
    const newText = prompt("Edit your task:");
    if (newText) {
      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    }
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      editTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;