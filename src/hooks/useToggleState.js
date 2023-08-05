import { useState } from "react";

export const useToggleState = (initialVal) => {
  const [state, setState] = useState(initialVal);
  // console.log("in useToggleState", state);
  const toggle = () => setState(!state);
  return [state, toggle];
};
