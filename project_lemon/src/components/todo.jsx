import { useEffect, useRef, useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const todoText = useRef();

    useEffect(() => {
        const existingTodos = localStorage.getItem('todos');
        setTodos(existingTodos ? JSON.parse(existingTodos) : []);
    }, []);

    function addTodo(event) {
        event.preventDefault();
        const next = [...todos, todoText.current.value];
        setTodos(next);
        localStorage.setItem('todos', JSON.stringify(next));
    }

    function removeTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <div>
            <h3>to do</h3>
            <ul id="ToDoList">
                {todos.map((todo, index) => (
                    <li key={todo} onClick={() => removeTodo(index)} class="listEntry noselect">
                        {todo}
                    </li>
                ))}
            </ul>

            <form onSubmit={addTodo}>
                <input type="text" placeholder="What needs to be done?" ref={todoText} />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
}

export default Todo;