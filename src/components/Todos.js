import React from 'react'
import Todo from './Todo';
import style from './todos.module.css'

const Todos = (props) => {
    console.log(props.todos)
  return (
    <section className={style.container}>
{
    props.todos.map((todo)=>
    <Todo 
    todo={todo.todo} 
    key={todo.id} 
    id={todo.id} 
    onRemoveTodo={props.onRemoveTodo}/>)// parent of todo ekhn theke id ta on props er maddhome todo te jabe.
}
    </section>
  );
};

export default Todos
