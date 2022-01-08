import React from 'react'
import todo from '../models/todo';
import classes from "./css/TodoItem.module.css"

const Todo  = (props : any) => {
     const removeHandler = ()=>{
        props.setTodo(props.items.filter((el:any)=>{
            
            return el.key !== props.item.key
        }))
     }
    return (
        <div>
            <li className={classes.TodoItem}> {props.item.text} 
            </li>
            <button onClick={removeHandler}>x</button>
        </div>
    )
}
export default  Todo;
