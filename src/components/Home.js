import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";
import style from "./home.module.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1
        style={{
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bolder",
          border: "2px red",
          borderStyle: "dotted",
          padding:"15px",
          margin:"20px"

        }}
      >
        Todo App
      </h1>
      <NewTodo onAddTodo={handleAddTodo} />

      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
