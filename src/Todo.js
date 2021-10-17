import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
<input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            {todo.name} <br /><br />
             <p>todos id:{todo.id}</p>
            </label>
        </div>
    )
}
