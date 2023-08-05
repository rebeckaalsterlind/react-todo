import { useState } from "react";

export const useInputState = (initialVal: string): any => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e: { target: { value: any } }) =>
    setValue(e.target.value);
  const reset = () => setValue("");

  return [value, handleChange, reset];
};
