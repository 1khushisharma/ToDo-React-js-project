import { useContext,createContext } from "react";

export const TodoContext=createContext({
    //-----------------------------------variables-----------------------
    Todos:[
        { id:1,
          Todo:"Todo msg",
          completed:false,  
        }
    ],
    // ---------------------------------methods----------------------------
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}