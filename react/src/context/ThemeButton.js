import React, { useContext } from "react";
import { ThemeContext } from "../ContextApp";

function ThemeButton() {
  const things = useContext(ThemeContext);

  return <button>{things}</button>;
};

export default ThemeButton;
