import axios from 'axios';
import { useEffect, useState } from "react"
import { Todolist } from "./Todolist"
import { v4 as uuid } from "uuid"
//import { useLoading, Audio } from '@agney/react-loading';

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [printtodo, setPrinttodo] = useState([])
    const [load,setLoad]=useState(false)
    
    useEffect(() => {
        getTodos();
    }, []);

    const handleTodo = (item) => {
        axios.post("http://localhost:3001/todo", item).then(() => {

            getTodos();
        });
    }
    const getTodos = () => {
        axios.get("http://localhost:3001/todo").then(({ data }) => {
             console.log(load)
            setLoad(true)
           
            setPrinttodo(data)
           
           //console.log(printtodo)
        })
       setLoad(false)
    }
    const handleToggle = (id) => {
        const newone = printtodo.map(el => ( el.id === id ? { ...el, status: "True" } : el))
        setPrinttodo(newone)
    }
    const handleDelete = (id) => {
        const newone1 = printtodo.filter(el => (el.id !== id))
            setPrinttodo(newone1)
    }
    
    return <div>
        <input value={todo} placeholder="Enter Todo" type="text" onChange={(e)=>(setTodo(e.target.value))}/>
        <button onClick={() => {
            const payload = {
                Title: todo,
                status:  "false",
                id:uuid(),
            }
            handleTodo(payload)
            setTodo("")
        }}>Add Todo</button>

        {!load?<h2>loading....</h2>: <Todolist handleDelete={handleDelete} handleToggle={handleToggle} todolist={printtodo}/> }
    
    </div>
}