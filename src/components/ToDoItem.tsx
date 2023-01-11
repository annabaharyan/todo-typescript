import React from 'react'
import { Task } from '../types/Task'
import { convert } from '../lib/convert'

interface CurrentProps{
    task:Task,
    onComplete:(task:Task)=>void
    onCancel:(task:Task)=>void
}

  const ToDoItem:React.FC <CurrentProps>=(props)=> {
  return (
    <div>
        <h3>{props.task.text}</h3>
        <p>added on {convert(props.task.timeAdded)}</p>
        {props.task.timeCompleted&&<p>completed on {convert(props.task.timeAdded)}</p>}
        {!props.task.done?<button onClick={()=>props.onComplete(props.task)}>Complete</button>:<button onClick={()=>props.onCancel(props.task)}>Cancel</button>}
    </div>
  )
}
export default ToDoItem