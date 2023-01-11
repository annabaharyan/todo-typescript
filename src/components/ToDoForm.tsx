import React, { RefObject } from "react";
import { useRef } from "react";
import CurrentProps from "../types/Props";
type myprops={
    handleAdd:(args:CurrentProps)=>void
}

const ToDoForm: React.FC<myprops> = (props) => {
  const text = useRef<HTMLInputElement>(null);
  const form=useRef<HTMLFormElement>(null)
  return (
    <>
      <form ref={form} onSubmit={e=>props.handleAdd({e,text,form})}>
        <input ref={text} />
        <button>Save</button>
      </form>

     
    </>
  );
};

export default ToDoForm;
