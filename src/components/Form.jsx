import { Input } from "./Input";
import { useState } from "react";

import "./Form.css";

export default function Form() {
  const [radioState, setRadioState] = useState("dinner");

  const handleChange = (event) => {
    setRadioState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form id='reservation-form' onSubmit={handleSubmit}>
      <Input
        Id={"reservation-name"}
        Type={"text"}
        Label={"Reservation Name"}
        Placeholder={"Name"}
      />
      <Input Id={"guests"} Type={"number"} Label={"Guests"} Placeholder={"1"} />

      <div className='selector-container'>
        <label htmlFor='occasion-selector'>Occasion</label>
        <div className='custom-select' id='occasion-selector'>
          <select name='occasion'>
            <option value='default'></option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
        </div>
      </div>

      <Input Id={"date"} Type={"date"} Label={"Reservation Date"} />
      <div className='time-range-selection'>
        <label>Time</label>
        <div className='radio-container'>
          <div className='radio-label-box'>
            <input
              type='radio'
              id='radio-launch'
              value='launch'
              onChange={handleChange}
              checked={radioState === "launch"}
            />{" "}
            <p htmlFor='radio-launch'>Launch</p>
          </div>

          <div className='radio-label-box'>
            <input
              type='radio'
              id='dinner'
              value='dinner'
              onChange={handleChange}
              checked={radioState === "dinner"}
            />{" "}
            <p htmlFor='radio-dinner'>Dinner</p>
          </div>
        </div>
      </div>

      <div className='selector-container'>
        <label htmlFor='time-selector'>Hour</label>
        {radioState === "dinner" ? (
          <div className='custom-select dinner' id='time-selector'>
            <select name='reservation-hour'>
              <option value=''></option>
              <option value='18:00'>18:00</option>
              <option value='18:30'>18:30</option>
              <option value='19:00'>19:00</option>
              <option value='19:30'>19:30</option>
              <option value='20:00'>20:00</option>
              <option value='20:30'>20:30</option>
              <option value='21:00'>21:00</option>
              <option value='21:30'>21:30</option>
              <option value='22:00'>22:00</option>
            </select>
          </div>
        ) : (
          <div className='custom-select launch' id='time-selector'>
            <select name='reservation-hour'>
              <option value=''></option>
              <option value='11:30'>11:30</option>
              <option value='12:00'>12:00</option>
              <option value='12:30'>12:30</option>
              <option value='13:00'>13:00</option>
              <option value='13:30'>13:30</option>
              <option value='14:00'>14:00</option>
              <option value='14:30'>14:30</option>
            </select>
          </div>
        )}
      </div>

      <Input
        Id={"mobile"}
        Type={"phone"}
        Label={"Phone number"}
        Placeholder={"+39"}
      />

      <Input
        Id={"email"}
        Type={"email"}
        Label={"Email"}
        Placeholder={"exemple@email.com"}
      />

      <div className='textarea-container'>
        <label htmlFor='textarea'>Add a special request!</label>
        <textarea
          name='special-request'
          rows='2'
          id='special-request'
        ></textarea>
      </div>

      <button className='form-btn' type='submit'>
        Reserve
      </button>
    </form>
  );
}
