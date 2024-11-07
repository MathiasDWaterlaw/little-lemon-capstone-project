import "./Input.css";
import { useState } from "react";

export function Input({ Id, Type, Label, Placeholder }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className='input-container'>
      <label htmlFor={Id}>{Label}</label>
      <input
        id={Id}
        name={Id}
        type={Type}
        value={inputValue}
        onChange={handleChange}
        min={1}
        placeholder={Placeholder}
      />
    </div>
  );
}
