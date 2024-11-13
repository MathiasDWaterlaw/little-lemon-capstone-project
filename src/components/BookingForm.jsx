import { set } from "react-hook-form";
import "./BookingForm.css";
import { useState } from "react";

export default function BookingForm({ HandleChangeFunction, InputValue }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log([...formData.entries()]);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        name='reservation-date'
        type='date'
        id='res-date'
        value={InputValue}
        onChange={HandleChangeFunction}
      />

      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        name='reservation-hour'
        value={InputValue}
        onChange={HandleChangeFunction}
      >
        <option value='17:00'>17:00</option>
        <option value='18:00'>18:00</option>
        <option value='19:00'>19:00</option>
        <option value='20:00'>20:00</option>
        <option value='21:00'>21:00</option>
        <option value='22:00'>22:00</option>
      </select>

      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        id='guests'
        name='guests-number'
        value={InputValue}
        onChange={HandleChangeFunction}
        min={1}
        max={10}
      />

      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        name='occasion'
        value={InputValue}
        onChange={HandleChangeFunction}
      >
        <option value=''></option>
        <option value='birthday'>Birthday</option>
        <option value='anniversary'>Anniversary</option>
      </select>

      <button type='submit'>Make Your reservation</button>
    </form>
  );
}
