import React from "react";
import Todo from "./Todo";
import { List } from "@mui/material/";

interface Todos {
  task: string;
  completed: boolean;
  id: string;
}

interface Props {
  todos: Todos[];
  deleteTodo: Function;
  toggleTodo: Function;
  editTodo: Function;
}

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }: Props) {
  return (
    <>
      <List>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </>
  );
}

export default TodoList;
