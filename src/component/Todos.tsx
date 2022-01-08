import React from 'react'
import todo from '../models/todo';
import Todo from './TodoItem';
import classes from "./css/Todos.module.css"

const Todos = (props:any) => {
    
    return (
        <div>
            <ul className= {classes.todos}> 
            {props.items.map((item:any) => {

                return (<div> 
                    <Todo key = {item.id} item = {item} items={props.items} setTodo={props.setTodo}/> 
                    
                    </div>
                )
            })}
            </ul>
        </div>
    )
}
export default Todos;
