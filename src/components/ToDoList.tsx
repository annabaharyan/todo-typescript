import React, { RefObject } from "react";
import MyType from "../../src/types/Props"
import { Task } from "../types/Task";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
interface CurrentProps {
  tasks: Task[];
  done: number;
  onComplete: (task: Task) => void;
  onAdd: (task: Task) => void;
  onCancel: (task: Task) => void;
}

const ToDoList: React.FC<CurrentProps> = (props) => {
  const handleNewTask = (
  {e,text,form}:MyType
   
  ): void => {
    e.preventDefault();

    let newTask = {
      id: Date.now + "-" + Math.floor(Math.random() * 1e9),
      text: text.current?.value,
      timeAdded: Date.now(),
      timeCompleted: null,
      done: false,
    };
    props.onAdd(newTask);
    form.current?.reset()
  };
  return (
    <div className="container">
      <ToDoForm handleAdd={handleNewTask} />
      {props.tasks.map((elem:Task)=>{
        return <ToDoItem key={elem.id} task={elem} onComplete={props.onComplete} onCancel={props.onCancel}/>
      }
        
      )}
      {props.tasks.length > 0 && (
        <p>
          {props.done}/{props.tasks.length}
        </p>
      )}
    </div>
  );
};
export default ToDoList;
