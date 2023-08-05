import React from "react";
import { Paper, TextField } from "@mui/material/";
import { useInputState } from "./hooks/useInputState";

interface Props {
  addTodo: Function;
}

//   interface State {
//     input: Object,
//   }

function TodoForm({ addTodo }: Props) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;
