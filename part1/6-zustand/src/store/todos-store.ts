import { create } from "zustand";
import { persist } from "zustand/middleware";


type Todo = {
    id: string,
    title: string
};


type TodosStore = {
    todos: Todo[],
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
    clear: () => void
};



export const useTodosStore = create<TodosStore>()(
  persist(

    (set) => ({
      todos: [],

      addTodo: (newTodo) => {
        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
      },

      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },

      clear: () => {
        set({
          todos: [],
        });
      },
    }),
    
    {
      name: "todos-storage",
    }

  )
);