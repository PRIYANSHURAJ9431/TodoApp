import React, { useRef } from 'react'
import './styles.css'

// Type accepting all values : any / unknown(recommended)
// void type returns undefined
// never type returns nothing


// Declaring variable type
let id: number | string;


// Defining Custom alias : type / interface

// type :
// type Student = {
//     id: number;
//     name: string;
//     // Optional properties
//     interest?: string;
// }

// interface :
interface Student {
    id: number;
    name: string;
    // Optional properties
    interest?: string;
}

// All properties of extended (parent) alias would be required to declare while defining variable of alias inheriting parent (child)

// Difference between type and interface is reflected in inheritance

//  eg of type inheritance:
// type Primary = Student & {
//     class: number;
// }

// eg of interface inheritance: 
interface Primary extends Student {
    class: number;
}

// types and interface could be used with one other

let s1: Primary = {
    id: 1,
    name: "ram",
    class: 3,
}


// Declaring variable type array of type
let studentsCollection: Student[];

// Declaring function type
let printName: (name: string) => never;

interface Todoprops {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handle: (e: React.FormEvent) => void;
}
const Home: React.FC<Todoprops> = ({ todo, setTodo, handle }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <form onSubmit={(e) => {
                handle(e);
                inputRef.current?.blur();
            }}>
                <input
                    ref={inputRef}
                    type='input' placeholder='Enter a task' className='inp'
                    value={todo} onChange={(e) => {
                        setTodo(e.target.value)
                    }} />
                <button type='submit' className='inp-but'
                >Go</button>
            </form>
        </div>
    )
}

export default Home