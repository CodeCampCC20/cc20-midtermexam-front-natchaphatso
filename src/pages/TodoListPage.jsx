import axios from "axios";
import React, { useState } from "react";

function TodoListPage() {
  const [todoLists, setTodoLists] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = async () => {
    if (input.trim()) {
      setTodoLists([
        ...todoLists,
        { id: Date.now(), completed: false, text: input },
      ]);
      setInput("");
      try {
        const res = await axios.post(
          "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/test"
        );
        console.log(res);
        // navigate("/todolists");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const keyDownEvent = (evt) => {
    if (evt.key === "Enter" || evt.key === " ") {
      evt.preventDefault();
      addTodo();
    }
  };

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="bg-pink-600 text-white shadow-lg flex flex-col justify-center items-center w-[30%] h-auto p-6 rounded-3xl gap-4">
        <h1 className="flex w-[100%] font-bold text-3xl">My Todo</h1>
        <div className="flex w-full justify-between">
          <input
            value={input}
            type="text"
            name="todo"
            className=" bg-white border-2 rounded-xl w-[80%] text-gray-700 pl-2"
            placeholder="New Task"
            onChange={(evt) => setInput(evt.target.value)}
            onKeyDown={keyDownEvent}
          />
          <button className="btn w-[15%] rounded-xl" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todoLists.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center border-2 justify-between w-104 p-2 rounded-xl gap-2"
            >
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-success"
                checked={todo.completed}
                onChange={() =>
                  setTodoLists(
                    todoLists.map((td) =>
                      td.id === todo.id
                        ? { ...td, completed: !td.completed }
                        : td
                    )
                  )
                }
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-400" : "text-white"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() =>
                  setTodoLists(todoLists.filter((td) => td.id !== todo.id))
                }
                className="bg-red-500 text-white py-1 px-2 rounded-xl border-2 border-white hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListPage;
