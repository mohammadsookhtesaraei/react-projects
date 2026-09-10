import { useState, type ReactNode } from "react"
import { useTodosStore } from "../../store/todos-store";


type TodosProps={};

 const Todos = ({}:TodosProps):ReactNode => {
  const todos=useTodosStore((state)=>state.todos);
  const add=useTodosStore((state)=>state.addTodo);
  const remove=useTodosStore((state)=>state.removeTodo);
  const clear=useTodosStore((state)=>state.clear);



  const [title,setTitle]=useState("");

  const handleAddTodoButtonClick=():void=>{
    const id=crypto.randomUUID();
    const todo={id,title};
    if(!title.trim()){
      return
    }
    add(todo);
    setTitle("");
  }


  return (
    <div className="py-10 px-4 border-b border-b-gray-300/50">
      <input type="text" value={title} onChange={e=> setTitle(e.target.value.toLowerCase())} className="border rounded me-2 border-gray-400/60 py-1 px-1 focus:outline-none focus:shadow-xs focus:shadow-green-600" placeholder="title" />
       <button onClick={handleAddTodoButtonClick} type="button"  className="bg-green-600 text-white px-4 py-1 rounded hover:scale-105 active:scale-90 transition-transform duration-150 cursor-pointer capitalize">add</button>
       <button onClick={clear} type="button"  className="bg-rose-600 text-white px-4 py-1 rounded hover:scale-105 active:scale-90 transition-transform duration-150 cursor-pointer capitalize ms-2">clear</button>
      {todos.length === 0 ? (<p className="text-gray-600 my-2">empty todos list</p>):(
         <ul className="my-6">
        {todos.map((todo)=>(
          <li className="my-1" key={todo.id}>
            {todo.title}
            <button onClick={()=>remove(todo.id)} type="button"  className="bg-orange-400 text-white px-4 py-1 rounded hover:scale-105 active:scale-90 transition-transform duration-150 cursor-pointer capitalize ms-2">remove</button>
          </li>
        ))}
       </ul>
      )}
    </div>
  );
}

export default Todos;
