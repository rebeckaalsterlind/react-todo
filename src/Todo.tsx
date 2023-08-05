import React from "react";
import EditForm from "./EditForm";
import { useToggleState } from "./hooks/useToggleState";
import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material/";

interface ITodo {
  id: string;
  task: string;
  completed: boolean;
  deleteTodo: Function;
  toggleTodo: Function;
  editTodo: Function;
}

function Todo({
  id,
  task,
  completed,
  deleteTodo,
  toggleTodo,
  editTodo,
}: ITodo) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditForm
            editTodo={editTodo}
            id={id}
            task={task}
            toggleEditForm={toggle}
          />
        ) : (
          <>
            <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText
              primary={task}
              style={{
                textDecoration: completed ? "line-through" : "none",
              }}
            />
            <IconButton aria-label="Delete" onClick={() => deleteTodo(id)}>
              <Delete />
            </IconButton>

            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </>
        )}
      </ListItem>
      <Divider />
    </>
  );
}

export default Todo;
