import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as UUID } from "uuid";

function TodoApp() {
  interface ITodo {
    id: string;
    task: string;
    completed: boolean;
  }

  const initalTodos: ITodo[] = [];

  const [todos, setTodos] = useState(initalTodos);
  const addTodo = (newTodoText: string) => {
    setTodos([...todos, { id: UUID(), task: newTodoText, completed: false }]);
  };

  const deleteTodo = (todoId: string, newTask: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const editTodo = (todoId: string, newTask: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </main>
    </div>
  );
}

export default TodoApp;
