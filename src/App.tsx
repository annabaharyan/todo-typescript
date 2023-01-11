import React from "react";
import { useState, useEffect } from "react";
import { Task } from "./types/Task";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [done, setDone] = useState<number>(0);
  useEffect(() => {
    setDone(todos.filter((a) => a.done).length);
  }, [todos]);
  const addTask = (task: Task): void => {
    setTodos([task, ...todos]);
  };
  const completeTask = (task: Task): void => {
    task.done = true;
    task.timeCompleted = Date.now();
    setTodos([...todos]);
  };
  const cancelTask = (task: Task): void => {
    task.done = false;
    task.timeCompleted = null;
    setTodos([...todos]);
  };
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoList
        tasks={todos}
        done={done}
        onAdd={addTask}
        onCancel={cancelTask}
        onComplete={completeTask}
      />
    </div>
  );
};

export default App;
