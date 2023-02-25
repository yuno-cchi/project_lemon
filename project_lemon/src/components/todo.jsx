import { useEffect, useRef, useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const todoText = useRef();

    useEffect(() => {
        const existingTodos = localStorage.getItem('todos');
        setTodos(existingTodos ? JSON.parse(existingTodos) : []);
    }, []);

    function addTodo(event) {
        event.preventDefault();
        const next = [...todos, inputValue];
        setTodos(next);
        localStorage.setItem('todos', JSON.stringify(next));
        setInputValue("");
    }

    function removeTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    const isInputEmpty = inputValue.trim() === "";

    return (
        <div>
            <h1 class="noselect">to do</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={inputValue}
                    onChange={handleInputChange}
                    ref={todoText}
                />
                <button type="submit" disabled={isInputEmpty}>Add Todo</button>
            </form>
            <ul id="ToDoList">
                {todos.map((todo, index) => (
                    <li
                        key={todo}
                        onClick={() => removeTodo(index)}
                        className="listEntry noselect"
                    >
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;