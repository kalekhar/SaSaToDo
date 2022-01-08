import React, { useRef } from 'react'
import classes from "./css/NewTodo.module.css"

const NewTodo: React.FC <{onAddTodo: (text : string) => void}> = (props)=> {
    const todoTextInputRef = useRef<any>(null)
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0){
            return;
        }
        todoTextInputRef.current.value = null
        props.onAddTodo(enteredText);

    };
    return (
        <form onSubmit={submitHandler} className= {classes.form}>
            <label htmlFor='text'> Todo Text</label>
            <input ref = {todoTextInputRef} type="text" id = "text" placeholder='Add the text'/>
            <button> Add todo</button>
        </form>
    )
}
export default NewTodo;
