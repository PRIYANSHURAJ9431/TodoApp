import React from 'react'
import { Todo } from '../model'
import TodoCard from './TodoCard';
import './styles.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className='todoList'>
            {todos.map((todo) => (
                // <li key={todo.id}>{todo.todo}</li>
                <TodoCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    )
}

export default TodoList