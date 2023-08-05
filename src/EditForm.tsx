import React from "react";
import { TextField } from "@mui/material/";
import { useInputState } from "./hooks/useInputState";
import { useToggleState } from "./hooks/useToggleState";

interface Props {
  id: string;
  task: string;
  editTodo: Function;
  toggleEditForm: Function;
}

function EditForm({ id, task, editTodo, toggleEditForm }: Props) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField value={value} onChange={handleChange} fullWidth />
    </form>
  );
}

export default EditForm;
