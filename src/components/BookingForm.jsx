import { set } from "react-hook-form";
import "./BookingForm.css";
import { useEffect, useState } from "react";

export default function BookingForm({
  HandleChangeFunction,
  InputValue,
  handleSubmit,
  dispatch,
  availableTimes,
}) {
  const [resDate, setDate] = useState("");

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(resDate) });

    console.log(resDate);
    console.log(availableTimes.times);
  }, [resDate]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        name='reservation-date'
        type='date'
        id='res-date'
        value={resDate}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        name='reservation-hour'
        value={InputValue}
        onChange={HandleChangeFunction}
      >
        {availableTimes.times.map((hour) => {
          return <option value={hour}>{hour}</option>;
        })}
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
