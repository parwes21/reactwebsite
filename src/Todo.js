import React, { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input } from "@mui/material";
 import Lists from "./Lists"; 
import db from "./firebase";
 
const Todo = () => {
    const [todos, setTodos] = useState([ ]);
    const [input, setInput] = useState();
    // useEffect(() => {
    //     db.collection('todos').onSnapshot(snapshot =>{
    //         console.log(snapshot.docs.map(doc =>doc.data().todo));
    //       setTodos(snapshot.docs.map(doc =>doc.data().todo));
    //   })
    // }, []);
    console.log(input);
    const addTodo =(event)=>{
        event.preventDefault();
        setTodos([...todos,input]);
        setInput('');
    }
    return(
        <>
            <h1 className="text-center my-3">Hello This Is To Do List</h1>
           
            <div className="text-center my-3">
            <form>
                <FormControl>
                    <InputLabel>Write A todo</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>
            {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
            {/* <button onClick={addTodo}>Add Todo</button> */}
            <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

            </form>
            <ul>
                {todos.map(todo =>(
                    <Lists text={todo}  />

                ))}
           
                 
            </ul>
            </div>

            
        </>
    );
    }
    export default Todo;