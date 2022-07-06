import React from 'react'
import './styles.css'
import { Todo } from '../model';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoCard = ({ todo, todos, setTodos }: Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        }))
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    };

    return (
        <form className='todoCard'>
            {!todo.isDone ? <span>{todo.todo}</span> : <s>{todo.todo}</s>}

            <span className='cardIcon'>&#9998;</span>

            <span className='cardIcon'
                onClick={() => {
                    console.log("deleted");
                    handleDelete(todo.id);
                }}>&#x274C;</span>
            <span className='cardIcon'
                onClick={() => {
                    console.log("done");
                    handleDone(todo.id);
                }}>&#x2713;</span>
        </form>
    )
}

export default TodoCard