import React, { useState } from "react";
import style from"./newTodo.module.css"


const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodos) => {
      return { ...oldTodos, [name]: e.target.value };
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:"",desc:""});// abar ager state e fire jabe submit howar por
    console.log(todo);
  };

  return (
    <div className="{}">
      <form className={style.container} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className={style.title}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Desc:</label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
