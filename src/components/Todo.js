import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const {id}=props;
  const handleClick=()=>{
    props.onRemoveTodo(id);
  }
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Todo;
