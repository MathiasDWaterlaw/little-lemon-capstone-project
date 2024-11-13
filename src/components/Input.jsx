import "./Input.css";
import { useState } from "react";

const frameError = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export function Input({ Id, Type, Label, Placeholder, ...props }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id={"div-" + Id} className='input-container'>
      <label htmlFor={Id}>{Label}</label>
      <input
        id={Id}
        name={Id}
        type={Type}
        value={inputValue}
        onChange={handleChange}
        min={1}
        placeholder={Placeholder}
        {...props}
      />
    </div>
  );
}
