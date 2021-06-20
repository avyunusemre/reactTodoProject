import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
