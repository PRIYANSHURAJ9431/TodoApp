import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { Todo } from '../model';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoCard = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [todoedit, setTodoedit] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setEdit(false)
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        }))
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, todo: todoedit } : todo
        }))
        setEdit(!edit);
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <form className='todoCard' onSubmit={(e) => {
            handleEdit(e, todo.id);
        }}>

            {!edit ?
                (!todo.isDone ? <span>{todo.todo}</span> : <s>{todo.todo}</s>) : (
                    <input
                        className='editInput'
                        ref={inputRef}
                        value={todoedit} onChange={(e) => {
                            setTodoedit(e.target.value)
                        }}></input>
                )}

            <span className='cardIcon'
                onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                        console.log("handle edit")
                    }
                }}>&#9998;</span>

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