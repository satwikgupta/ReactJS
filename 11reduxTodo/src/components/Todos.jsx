import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
    <br />
      <h1 className="w-20px text-3xl ">Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 py-2 px-4 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-700 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              ☠️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
