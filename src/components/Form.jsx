import { Input } from "./Input";
import { useState } from "react";

export default function Form() {
  const [radioState, setRadioState] = useState("dinner");

  const handleChange = (event) => {
    setRadioState(event.target.value);
  };

  return (
    <form action=''>
      <Input
        Id={"reservation-name"}
        Type={"text"}
        Label={"Reservation Name"}
        Placeholder={"Name"}
      />
      <Input Id={"guests"} Type={"number"} Label={"Guests"} Placeholder={"1"} />

      <label htmlFor='occasion-selector'>Occasion</label>
      <div className='custom-select' id='occasion-selector'>
        <select name='occasion'>
          <option value='default'></option>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
      </div>

      <Input Id={"date"} Type={"date"} Label={"Reservation Date"} />

      <div className='radio-container'>
        <label htmlFor='radio-launch'>
          <input
            type='radio'
            id='radio-launch'
            value='launch'
            onChange={handleChange}
            checked={radioState === "launch"}
          />{" "}
          Launch
        </label>

        <label htmlFor='radio-dinner'>
          <input
            type='radio'
            id='dinner'
            value='dinner'
            onChange={handleChange}
            checked={radioState === "dinner"}
          />{" "}
          Dinner
        </label>
      </div>

      <label htmlFor='time-selector'>Time</label>
      {radioState === "dinner" ? (
        <div className='custom-select dinner' id='time-selector'>
          <select name='reservation-hour'>
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

      <button className='form-btn' type='submit'>
        Reserve
      </button>
    </form>
  );
}
